import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
} from "../actions/socketAction";

const initialState = {
  wsConnecting: false,
  wsOpen: false,
  messages: [],
};

export default function socketReducer(state = initialState, action) {
  switch (action.type) {
    case WS_CONNECTION_START:
      return {
        ...state,
        wsConnecting: true,
      };

    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnecting: false,
        wsOpen: true,
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,        
        wsOpen: false,
      };

    case WS_CONNECTION_CLOSED:
      return {
        ...state,        
        wsOpen: false,
      };

    case WS_GET_MESSAGE:
      return {
        ...state,
        messages: state.messages.length
          ? [...state.messages, { ...action.payload }]
          : [{ ...action.payload }],
      };

    default:
      return state;
  }
}
