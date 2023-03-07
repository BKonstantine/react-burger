import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from "../constants/index";
import { TIngredientsAction, IIngredient } from "../types/data";

interface IIngredientsInitialState {
  burgerIngredientsList?: Array<IIngredient>;
  burgerIngredientsListRequest: boolean;
  burgerIngredientsListFailed: boolean;
  burgerIngredientsListFailedText: string | undefined;
}

const ingredientsInitialState: IIngredientsInitialState = {
  burgerIngredientsList: [],
  burgerIngredientsListRequest: false,
  burgerIngredientsListFailed: false,
  burgerIngredientsListFailedText: undefined,
};

export default function burgerIngredientsReducer(
  state = ingredientsInitialState,
  action: TIngredientsAction
): IIngredientsInitialState {
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
