import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Action, ActionCreator } from "redux";
import { store } from "../store";
import {
  TConstructorAction,
  TIngredientsAction,
  TCurrenIngredientAction,
  TCurrentOrderAction,
  TSocketAction,
  TUserActions,
} from "../types/data";

/* Тип всех экшенов приложения */
type TApplicationActions =
  | TConstructorAction
  | TIngredientsAction
  | TCurrenIngredientAction
  | TCurrentOrderAction
  | TSocketAction
  | TUserActions;

/* Тип с описанием хранилища */
export type RootState = ReturnType<typeof store.getState>;

/* export type DispatchFunc = () => AppDispatch; */

/* export type AppDispatch = typeof store.dispatch; */
export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;

/* export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>; */

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  TApplicationActions
>;
