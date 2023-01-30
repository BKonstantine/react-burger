import { combineReducers } from "redux";
import burgerIngredientsReducer from "./burgerIngredientsReducer";
import burgerConstructorReducer from "./burgerConstructorReducer";
import currentIngredientReducer from "./currentIngredientReducer";
import currentOrderReducer from "./currentOrderReducer";
import registrationPageReducer from "./registrationPageReducer";

export const rootReducer = combineReducers({
  burgerIngredientsReducer,
  burgerConstructorReducer,
  currentIngredientReducer,
  currentOrderReducer,
  registrationPageReducer
});
