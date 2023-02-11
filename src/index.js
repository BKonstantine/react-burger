import ReactDOM from "react-dom/client";
import App from "./components/app/app";
import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { rootReducer } from "./services/reducers/index";
import { socketMiddleware } from "./services/middleware/socketMiddleware";
import {
  WS_CONNECTION_START_ALL,
  WS_CONNECTION_START_PROFILE,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
} from "./services/actions/socketAction";

const wsActions = {
  wsInitAll: WS_CONNECTION_START_ALL,
  wsInitProfile: WS_CONNECTION_START_PROFILE,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE,
};

const wsUrl = "wss://norma.nomoreparties.space/orders";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, socketMiddleware(wsUrl, wsActions))
);

const store = createStore(rootReducer, enhancer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
