import { getIngridientsRequest } from "../../utils/api";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";

export function getIngridients() {
  return function (dispatch) {
    dispatch({ type: GET_INGREDIENTS_REQUEST });
    getIngridientsRequest()
      .then((res) => {        
        /* dispatch({ type: GET_INGREDIENTS_SUCCESS, data: res.data }); */
        setTimeout(
          () => dispatch({ type: GET_INGREDIENTS_SUCCESS, data: res.data }),
          500
        );
      })
      .catch((err) => {
        dispatch({ type: GET_INGREDIENTS_FAILED, errorText: err });
      });
  };
}