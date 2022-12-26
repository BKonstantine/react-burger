import { combineReducers } from "redux";
import burgerIngredientsReducer from "./burgerIngredientsReducer";
import burgerConstructorReducer from "./burgerConstructorReducer";
import currentIngredientReducer from "./currentIngredientReducer";

export const rootReducer = combineReducers({
  burgerIngredientsReducer,
  burgerConstructorReducer,
  currentIngredientReducer,
});
