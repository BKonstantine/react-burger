export const socketMiddleware = (wsActions) => {
  return (store) => {
    let socket = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsInit, onOpen, onClose, onClosed, onError, onMessage } =
        wsActions;

      if (type === wsInit) {
        socket = new WebSocket(payload);
      } else if (type === onClose) {
        socket.close(1000, "CLOSE_NORMAL");
      }

      if (socket) {
        socket.onopen = (event) => {
          console.log("Открыт");
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = (event) => {
          console.log("Ошибка");
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          console.log(parsedData);
          const { success, ...restParsedData } = parsedData;
          dispatch({ type: onMessage, payload: restParsedData });
        };

        socket.onclose = (event) => {
          console.log("Закрыт");
          dispatch({ type: onClosed, payload: event });
        };
      }

      next(action);
    };
  };
};
