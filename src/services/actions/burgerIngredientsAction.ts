import { getIngridientsRequest } from "../../utils/api";
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from "../constants/index";
import {
  IGetIngredientsRequest,
  IIngredient,
  IGetIngredientsSuccess,
  IGetIngredientsFailed,
} from "../types/data";
import { AppDispatch } from "../types";

const getIngredientsRequest = (): IGetIngredientsRequest => {
  return {
    type: GET_INGREDIENTS_REQUEST,
  };
};

const getIngredientsSuccess = (
  ingredients: Array<IIngredient>
): IGetIngredientsSuccess => {
  return {
    type: GET_INGREDIENTS_SUCCESS,
    payload: ingredients,
  };
};

const getIngredientsFailed = (text: string): IGetIngredientsFailed => {
  return {
    type: GET_INGREDIENTS_FAILED,
    errorText: text,
  };
};

export function getIngridients() {
  return function (dispatch: AppDispatch) {
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
