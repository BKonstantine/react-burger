import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  SORT_INGREDIENTS,
  RESET_INGREDIENT,
} from "../constants/index";

import { TConstructorAction, IIngredient } from "../types/data";

interface IConstructorInitialState {
  burgerConstructorBunElement: IIngredient | undefined;
  burgerConstructorFillingList: Array<IIngredient>;
}

const constructorInitialState: IConstructorInitialState = {
  burgerConstructorBunElement: undefined,
  burgerConstructorFillingList: [],
};

export default function burgerConstructorReducer(
  state = constructorInitialState,
  action: TConstructorAction
): IConstructorInitialState {
  switch (action.type) {
    case ADD_INGREDIENT:
      if (action.payload.type === "bun") {
        return {
          ...state,
          burgerConstructorBunElement: action.payload,
        };
      }

      return {
        ...state,
        burgerConstructorFillingList: [
          ...state.burgerConstructorFillingList,
          { constructorItemId: action.id, ...action.payload },
        ],
      };

    case DELETE_INGREDIENT:
      return {
        ...state,
        burgerConstructorFillingList: state.burgerConstructorFillingList.filter(
          (item) => item.constructorItemId !== action.payload.constructorItemId
        ),
      };

    case SORT_INGREDIENTS:
      return {
        ...state,
        burgerConstructorFillingList: action.payload,
      };

    case RESET_INGREDIENT:
      return {
        burgerConstructorBunElement: undefined,
        burgerConstructorFillingList: [],
      };

    default:
      return state;
  }
}
