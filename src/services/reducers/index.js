import { combineReducers } from "redux";
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from "../actions/index";

const ingredientsInitialState = {
  /* Начальное состояние store списка ингредиентов */
  burgerIngredientsList: [],
  burgerIngredientsListRequest: false,
  burgerIngredientsListFailed: false,
  burgerIngredientsListFailedText: undefined,

  burgerConstructorList: [],
  currentIngredient: { ingredient: undefined },
  currentOrder: { order: undefined },
};

export function ingredientsReducer(state = ingredientsInitialState, action) {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST:
      return { ...state, burgerIngredientsListRequest: true };

    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        burgerIngredientsList: action.data,
        burgerIngredientsListRequest: false,
        burgerIngredientsListFailed: false,
      };

    case GET_INGREDIENTS_FAILED:
      return {
        burgerIngredientsListRequest: false,
        burgerIngredientsListFailed: true,
        burgerIngredientsListFailedText: action.errorText
      };
    default:
      return state;
  }
}

export const rootReducers = combineReducers({
  ingredients: ingredientsReducer,
});
