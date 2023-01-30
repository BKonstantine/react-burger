import { combineReducers } from "redux";
import burgerIngredientsReducer from "./burgerIngredientsReducer";
import burgerConstructorReducer from "./burgerConstructorReducer";
import currentIngredientReducer from "./currentIngredientReducer";
import currentOrderReducer from "./currentOrderReducer";
import registerPageReducer from "./registerPageReducer";

export const rootReducer = combineReducers({
  burgerIngredientsReducer,
  burgerConstructorReducer,
  currentIngredientReducer,
  currentOrderReducer,
  registerPageReducer
});
