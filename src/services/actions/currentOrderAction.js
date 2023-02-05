import { sendOrderRequest } from "../../utils/api";
import { refreshUserToken } from "../actions/userAction";
import { getCookie } from "../../utils/cookie";

export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILED = "GET_ORDER_FAILED";
export const RESET_ORDER = "RESET_ORDER";

export function makeOrder(ingredients) {
  return function (dispatch) {
    const arrayId = [
      ingredients.burgerConstructorBunElement._id,
      ...ingredients.burgerConstructorFillingList.map((item) => item._id),
      ingredients.burgerConstructorBunElement._id,
    ];

    dispatch({ type: GET_ORDER_REQUEST });
    sendOrderRequest(arrayId, getCookie("accessToken"))
      .then((res) => {
        dispatch({ type: GET_ORDER_SUCCESS, payload: res.order.number });
      })
      .catch((err) => {
        if (err.message === "jwt expired" || "jwt malformed") {
          dispatch(refreshUserToken(getCookie("refreshToken")));
        }
      })
      .catch(() => {
        sendOrderRequest(arrayId, getCookie("accessToken"))
          .then((res) => {
            dispatch({ type: GET_ORDER_SUCCESS, payload: res.order.number });
          })
          .catch(() => {
            dispatch({
              type: GET_ORDER_FAILED,
              errorText: "Ошибка при формировании заказа",
            });
          });
      });
  };
}
