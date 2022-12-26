import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
} from "../actions/burgerConstructorAction";

const constructorInitialState = {
  burgerConstructorBunElement: undefined,
  burgerConstructorFillingList: [],  
  currentOrder: { order: undefined },
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
          action.payload,
        ],
      };
    default:
      return state;
  }
}
