import { getIngridientsRequest } from "../../utils/api";
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from "../constants/index";

function getIngredientsRequest() {
  return {
    type: GET_INGREDIENTS_REQUEST,
  };
}

function getIngredientsSuccess(ingredients) {
  return {
    type: GET_INGREDIENTS_SUCCESS,
    payload: ingredients,
  };
}

function getIngredientsFailed(text) {
  return {
    type: GET_INGREDIENTS_FAILED,
    errorText: text,
  };
}

export function getIngridients() {
  return function (dispatch) {
    dispatch(getIngredientsRequest());
    getIngridientsRequest()
      .then((res) => {
        dispatch(getIngredientsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getIngredientsFailed(err));
      });
  };
}
