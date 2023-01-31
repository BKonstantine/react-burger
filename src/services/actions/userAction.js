import { registerUserRequest } from "../../utils/api";
import {
  parseCookie,
  getCookie,
  setCookie,
  deleteCookie,
} from "../../utils/cookie";

/* Экшены управления формой регистрации */
export const USER_REGISTER_FORM_SET_VALUE = "USER_REGISTER_FORM_SET_VALUE";
export const USER_REGISTER_FORM_SUBMIT = "USER_REGISTER_FORM_SUBMIT";
export const USER_REGISTER_FORM_SUBMIT_SUCCESS =
  "USER_REGISTER_FORM_SUBMIT_SUCCESS";
export const USER_REGISTER_FORM_SUBMIT_FAILED =
  "USER_REGISTER_FORM_SUBMIT_FAILED";

export function setRegisterFormValue(field, value) {
  return {
    type: USER_REGISTER_FORM_SET_VALUE,
    field,
    value,
  };
}

/* Экшены управления формой авторизации */
export const USER_LOGIN_FORM_SET_VALUE = "USER_LOGIN_FORM_SET_VALUE";
export const USER_LOGIN_FORM_SUBMIT = "USER_LOGIN_FORM_SUBMIT";
export const USER_LOGIN_FORM_SUBMIT_SUCCESS = "USER_LOGIN_FORM_SUBMIT_SUCCESS";
export const USER_LOGIN_FORM_SUBMIT_FAILED = "USER_LOGIN_FORM_SUBMIT_FAILED";

export function setLoginFormValue(field, value) {
  return {
    type: USER_LOGIN_FORM_SET_VALUE,
    field,
    value,
  };
}

/* thunk формы регистрации */
export function registerUser(userDate) {
  return function (dispatch) {
    dispatch({ type: USER_REGISTER_FORM_SUBMIT });
    registerUserRequest(userDate)
      .then((res) => {
        console.log(res);
        setCookie("accessToken", parseCookie(res.accessToken));
        setCookie("refreshToken", res.refreshToken);
      })
      .then(() => dispatch({ type: USER_REGISTER_FORM_SUBMIT_SUCCESS }))
      .catch(() => {
        dispatch({ type: USER_REGISTER_FORM_SUBMIT_FAILED });
      });
  };
}

/* thunk формы авторизации */
export function loginUser(userDate) {
  return function (dispatch) {
    dispatch({ type: USER_LOGIN_FORM_SUBMIT });
    registerUserRequest(userDate)
      .then((res) => {
        console.log(res);
        setCookie("accessToken", res.accessToken);
        setCookie("refreshToken", res.refreshToken);
      })
      .then(() => dispatch({ type: USER_LOGIN_FORM_SUBMIT_SUCCESS }))
      .catch(() => {
        dispatch({ type: USER_LOGIN_FORM_SUBMIT_FAILED });
      });
  };
}
