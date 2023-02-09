import { getCookie } from "../../utils/cookie";

export const socketMiddleware = (wsUrl, wsActions) => {
  return (store) => {
    let socket = null;

    return (next) => (action) => {
      const { dispatch, getState } = store;
      const { type } = action;
      const { wsInit, onOpen, onClose, onError, onMessage } = wsActions;
      const { isAuth } = getState().userReducer;
      const accessToken = getCookie("accessToken");

      if (type === wsInit && isAuth) {
        socket = new WebSocket(`${wsUrl}?token=${accessToken}`);
      } else if (type === wsInit) {
        socket = new WebSocket(`${wsUrl}/all`);
      } else if (type === onClose) {
        socket.close(1000, "CLOSE_NORMAL");
      }

      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
          console.log("Октрыто");
        };

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
          console.log("Ошибка");
        };

        socket.onmessage = (event) => {
          console.log("Сообщение");
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;
          console.log(parsedData);
          dispatch({ type: onMessage, payload: restParsedData });
        };

        socket.onclose = (event) => {
          console.log("Закрыто");
          dispatch({ type: onClose, payload: event });
        };
      }

      next(action);
    };
  };
};
