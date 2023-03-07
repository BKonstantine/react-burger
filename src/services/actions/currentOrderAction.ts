import { sendOrderRequest } from "../../utils/api";
import { refreshUserToken } from "./userAction";
import { getCookie } from "../../utils/cookie";
import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  RESET_ORDER,
} from "../constants/index";
import {
  IGetOrderRequest,
  IGetOrderSuccess,
  IGetOrderFailed,
  IResetOrder,
  IIngredient,
  IConstructorInitialState,
} from "../types/data";
import { AppDispatch } from "../types";

const getOrderRequest = (): IGetOrderRequest => {
  return {
    type: GET_ORDER_REQUEST,
  };
};

const getOrderSuccess = (orderNumber: number): IGetOrderSuccess => {
  return {
    type: GET_ORDER_SUCCESS,
    payload: orderNumber,
  };
};

const getOrderFailed = (text: string): IGetOrderFailed => {
  return {
    type: GET_ORDER_FAILED,
    errorText: text,
  };
};

export const resetOrder = (): IResetOrder => {
  return {
    type: RESET_ORDER,
  };
};

export function makeOrder(ingredients: IConstructorInitialState ) {
  return function (dispatch: AppDispatch) {
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
