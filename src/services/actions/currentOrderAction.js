import { sendOrderRequest } from "../../utils/api";

export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILED = "GET_ORDER_FAILED";

export function makeOrder(ingredients, toggleModal) {
  return function (dispatch) {
    const arrayId = [
      ingredients.burgerConstructorBunElement._id,
      ...ingredients.burgerConstructorFillingList.map((item) => item._id),
      ingredients.burgerConstructorBunElement._id,
    ];

    dispatch({ type: GET_ORDER_REQUEST });
    sendOrderRequest(arrayId)
      .then((res) => {
        /* dispatch({ type: GET_ORDER_SUCCESS, data: res.order.number}); */
        setTimeout(
          () => dispatch({ type: GET_ORDER_SUCCESS, payload: res.order.number }),
          500
        );
      })
      .then(() => {
        toggleModal();
      })
      .catch(() => {
        dispatch({
          type: GET_ORDER_FAILED,
          errorText: "Ошибка при формировании заказа",
        });
      });
  };
}
