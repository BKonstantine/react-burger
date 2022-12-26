import { sendOrderRequest } from "../../utils/api";

export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILED = "GET_ORDER_FAILED";

export function makeOrder(arrayId, toggleModal) {
  return function (dispatch) {
    dispatch({ type: GET_ORDER_REQUEST });
    sendOrderRequest(arrayId)
      .then((res) => {
        /* dispatch({ type: GET_ORDER_SUCCESS, data: res.order.number}); */
        setTimeout(
          () => dispatch({ type: GET_ORDER_SUCCESS, data: res.order.number }),
          500
        );
      })
      .then(() => {
        toggleModal();
      })
      .catch(() => console.log("Ошибка при формировании заказа"));
  };
}

/* const { constructorContext, setOrder } = useContext();

  function makeOrder() {
    sendOrderRequest(constructorContext.id)
      .then((res) => setOrder(res.order.number))
      .then(() => {
        toggleModal();
      })
      .catch(() => console.log("Ошибка при формировании заказа"));
  } */
