import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";
import { store } from "../store";
import { TConstructorAction, TIngredientsAction } from "../types/data";

type TApplicationActions = TConstructorAction | TIngredientsAction;

export type DispatchFunc = () => AppDispatch

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;
