import { combineReducers } from "redux";
import burgerIngredientsReducer from "./burgerIngredientsReducer";
import burgerConstructorReducer from "./burgerConstructorReducer";

export const rootReducer = combineReducers({
  ingredients: burgerIngredientsReducer,
  constructor: burgerConstructorReducer,
});
