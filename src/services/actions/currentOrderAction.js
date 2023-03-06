import { sendOrderRequest } from "../../utils/api";
import { refreshUserToken } from "../actions/userAction";
import { getCookie } from "../../utils/cookie";
import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  RESET_ORDER,  
} from "../constants/index";

function getOrderRequest() {
  return {
    type: GET_ORDER_REQUEST,
  };
}

function getOrderSuccess(orderNumber) {
  return {
    type: GET_ORDER_SUCCESS,
    payload: orderNumber,
  };
}

function getOrderFailed(text) {
  return {
    type: GET_ORDER_FAILED,
    errorText: text,
  };
}

export function resetOrder() {
  return {
    type: RESET_ORDER,
  };
}

export function makeOrder(ingredients) {
  return function (dispatch) {
    const arrayId = [
      ingredients.burgerConstructorBunElement._id,
      ...ingredients.burgerConstructorFillingList.map((item) => item._id),
      ingredients.burgerConstructorBunElement._id,
    ];

    dispatch(getOrderRequest());
    sendOrderRequest(arrayId, getCookie("accessToken"))
      .then((res) => {
        dispatch(getOrderSuccess(res.order.number));
      })
      .catch((err) => {
        if (err.message === "jwt expired" || "jwt malformed") {
          dispatch(refreshUserToken(getCookie("refreshToken"))).then(() => {
            sendOrderRequest(arrayId, getCookie("accessToken"))
              .then((res) => {
                dispatch(getOrderSuccess(res.order.number));
              })
              .catch(() => {
                dispatch(getOrderFailed("Ошибка при формировании заказа"));
              });
          });
        }
      });
  };
}
