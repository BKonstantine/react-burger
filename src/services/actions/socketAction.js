export const WS_CONNECTION_START_ALL = "WS_CONNECTION_START_ALL";
export const WS_CONNECTION_START_PROFILE = "WS_CONNECTION_START_PROFILE";
export const WS_CONNECTION_SUCCESS = "WS_CONNECTION_SUCCESS";
export const WS_CONNECTION_ERROR = "WS_CONNECTION_ERROR";
export const WS_CONNECTION_CLOSED = "WS_CONNECTION_CLOSED";
export const WS_GET_MESSAGE = "WS_GET_MESSAGE";

export const wsConnectionStartAll = () => {
  return {
    type: WS_CONNECTION_START_ALL,
  };
};

export const wsConnectionStartProfile = () => {
  return {
    type: WS_CONNECTION_START_PROFILE,
  };
};

export const wsConnectionSuccess = () => {
  return {
    type: WS_CONNECTION_SUCCESS,
  };
};

export const wsConnectionError = () => {
  return {
    type: WS_CONNECTION_ERROR,
  };
};

export const wsConnectionClosed = () => {
  return {
    type: WS_CONNECTION_CLOSED,
  };
};

export const wsGetMessage = (message) => {
  return {
    type: WS_GET_MESSAGE,
    payload: message,
  };
};
