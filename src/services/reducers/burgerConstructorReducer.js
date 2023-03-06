import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  SORT_INGREDIENTS,
  RESET_INGREDIENT,
} from "../constants/index";

const constructorInitialState = {
  burgerConstructorBunElement: undefined,
  burgerConstructorFillingList: [],
};

export default function burgerConstructorReducer(
  state = constructorInitialState,
  action
) {
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
