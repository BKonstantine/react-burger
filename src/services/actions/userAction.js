import { registerUserRequest } from "../../utils/api";

/* Экшены управления формой регистрации */
export const USER_REGISTER_FORM_SET_VALUE =
  "PARTICIPANT_REGISTER_FORM_SET_VALUE";
export const USER_REGISTER_FORM_SUBMIT = "PARTICIPANT_REGISTER_FORM_SUBMIT";
export const USER_REGISTER_FORM_SUBMIT_SUCCESS =
  "PARTICIPANT_REGISTER_FORM_SUBMIT_SUCCESS";
export const USER_REGISTER_FORM_SUBMIT_FAILED =
  "PARTICIPANT_REGISTER_FORM_SUBMIT_FAILED";

export function setUserFormValue(field, value) {
  return {
    type: USER_REGISTER_FORM_SET_VALUE,
    field,
    value,
  };
}

export function registerUser(userDate) {
  return function (dispatch) {
    dispatch({ type: USER_REGISTER_FORM_SUBMIT });
    registerUserRequest(userDate)
      .then((res) => console.log(res))
      .then(() => dispatch({ type: USER_REGISTER_FORM_SUBMIT_SUCCESS }))
      .catch(() => {
        dispatch({ type: USER_REGISTER_FORM_SUBMIT_FAILED });
      });
  };
}
