import {
  SET_CURRENT_INGREDIENT,
  RESET_CURRENT_INGREDIENT,
} from "../constants/index";
import {
  ISetCurrentIngredient,
  IResetCurrentIngredient,
  IIngredient,
} from "../types/data";

export const setCurrentIngredient = (
  ingredient: IIngredient
): ISetCurrentIngredient => {
  return {
    type: SET_CURRENT_INGREDIENT,
    payload: ingredient,
  };
};

export const resetCurrentIngredient = (): IResetCurrentIngredient => {
  return {
    type: RESET_CURRENT_INGREDIENT,
  };
};
