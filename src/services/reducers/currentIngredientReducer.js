import {
  SET_CURRENT_INGREDIENT,
  RESET_CURRENT_INGREDIENT,
} from "../actions/currentIngredientAction";

const currentIngredientInitialState = {
  currentIngredient: undefined,
};

export default function currentIngredientReducer(
  state = currentIngredientInitialState,
  action
) {
  switch (action.type) {
    default:
      return state;
  }
}
