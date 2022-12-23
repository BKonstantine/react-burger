import { combineReducers } from "redux";
import { burgerIngredientsReducer } from "./burgerIngredientsReducer";

export const rootReducers = combineReducers({
  ingredients: burgerIngredientsReducer,
});
