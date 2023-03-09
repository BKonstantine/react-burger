import {
  SET_CURRENT_INGREDIENT,
  RESET_CURRENT_INGREDIENT,
} from "../constants/index";
import {
  TCurrenIngredientAction,
  ICurrentIngredientInitialState,
} from "../types/data";

const currentIngredientInitialState: ICurrentIngredientInitialState = {
  currentIngredient: undefined,
};

export default function currentIngredientReducer(
  state = currentIngredientInitialState,
  action: TCurrenIngredientAction
): ICurrentIngredientInitialState {
  switch (action.type) {
    case SET_CURRENT_INGREDIENT:
      return { ...state, currentIngredient: action.payload };

    case RESET_CURRENT_INGREDIENT:
      return { ...state, currentIngredient: undefined };
    default:
      return state;
  }
}
