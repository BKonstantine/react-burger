import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from "../constants/index";

const ingredientsInitialState = {
  burgerIngredientsList: [],
  burgerIngredientsListRequest: false,
  burgerIngredientsListFailed: false,
  burgerIngredientsListFailedText: undefined,
};

export default function burgerIngredientsReducer(
  state = ingredientsInitialState,
  action
) {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST:
      return { ...state, burgerIngredientsListRequest: true };

    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        burgerIngredientsList: action.payload,
        burgerIngredientsListRequest: false,
        burgerIngredientsListFailed: false,
      };

    case GET_INGREDIENTS_FAILED:
      return {
        burgerIngredientsListRequest: false,
        burgerIngredientsListFailed: true,
        burgerIngredientsListFailedText: action.errorText,
      };

    default:
      return state;
  }
}
