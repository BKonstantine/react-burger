import {
  SET_CURRENT_INGREDIENT,
  RESET_CURRENT_INGREDIENT,
} from "../constants/index";

const currentIngredientInitialState = {
  currentIngredient: undefined,
};

export default function currentIngredientReducer(
  state = currentIngredientInitialState,
  action
) {
  switch (action.type) {
    case SET_CURRENT_INGREDIENT:
      return { ...state, currentIngredient: action.payload };

    case RESET_CURRENT_INGREDIENT:
      return { ...state, currentIngredient: undefined };
    default:
      return state;
  }
}
