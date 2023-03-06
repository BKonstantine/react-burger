import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";
import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";
import { store } from "../store";

type TApplicationActions = {};
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
/* export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>; */
export const useDispatch = () => dispatchHook<AppDispatch /* | AppThunk */>();
