import { ThunkAction, ThunkDispatch } from "redux-thunk";
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

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  TApplicationActions
>;
