import {
  SET_CURRENT_INGREDIENT,
  RESET_CURRENT_INGREDIENT,
} from "../constants/index";

export function setCurrentIngredient(ingredient) {
  return {
    type: SET_CURRENT_INGREDIENT,
    payload: ingredient,
  };
}

export function resetCurrentIngredient() {
  return {
    type: RESET_CURRENT_INGREDIENT,
  };
}
