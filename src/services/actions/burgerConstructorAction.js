import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  RESET_INGREDIENT,
  SORT_INGREDIENTS,
} from "../constants/index";

export function addIngredient(ingredientId, ingredient) {
  return {
    type: ADD_INGREDIENT,
    id: ingredientId,
    payload: ingredient,
  };
}

export function sortIngredients(ingredients) {
  return {
    type: SORT_INGREDIENTS,
    payload: ingredients,
  };
}

export function deleteIngredient(ingredient) {
  return {
    type: DELETE_INGREDIENT,
    payload: ingredient,
  };
}

export function resetIngredient() {
  return {
    type: RESET_INGREDIENT,
  };
}
