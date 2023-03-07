import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  RESET_ORDER,  
} from "../constants/index";

const currentOrderInitialState = {
  order: undefined,
  orderRequest: false,
  orderFailed: false,
  orderFailedText: undefined,  
};

export default function currentOrderReducer(
  state = currentOrderInitialState,
  action
) {
  switch (action.type) {
    case GET_ORDER_REQUEST:
      return { ...state, orderRequest: true };

    case GET_ORDER_SUCCESS:
      return {
        ...state,
        orderRequest: false,
        orderFailed: false,
        order: action.payload,
      };

    case GET_ORDER_FAILED:
      return {
        ...state,
        orderRequest: false,
        orderFailed: true,
        orderFailedText: action.errorText,
      };

    case RESET_ORDER:
      return { ...state, order: undefined };    

    default:
      return state;
  }
}
