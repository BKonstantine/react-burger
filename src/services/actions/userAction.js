import {
  registerUserRequest,
  loginUserRequest,
  checkUserAccessRequest,
  refreshTokenRequest,
} from "../../utils/api";
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

export const CHECK_USER_ACCESS = "CHECK_USER_ACCESS";

/* thunk формы регистрации */
export function registerUser(userDate, callback) {
  return function (dispatch) {
    dispatch({ type: USER_REGISTER_FORM_SUBMIT });
    registerUserRequest(userDate)
      .then((res) => {
        console.log("TRUE registerUserRequest", res);
        setCookie(
          "accessToken",
          parseCookie(res.accessToken)
        );
        setCookie("refreshToken", res.refreshToken);
      })
      .then(() => {
        dispatch({ type: USER_REGISTER_FORM_SUBMIT_SUCCESS });
        callback();
      })
      .catch((err) => {
        console.log("FALSE registerUserRequest", err);
        dispatch({ type: USER_REGISTER_FORM_SUBMIT_FAILED });
      });
  };
}

/* thunk формы авторизации */
export function loginUser(userDate, callback) {
  return function (dispatch) {
    dispatch({ type: USER_LOGIN_FORM_SUBMIT });
    loginUserRequest(userDate)
      .then((res) => {
        console.log("TRUE loginUserRequest", res);
        setCookie(
          "accessToken",
          parseCookie(res.accessToken)
        );
        setCookie("refreshToken", res.refreshToken);
      })
      .then(() => {
        dispatch({ type: USER_LOGIN_FORM_SUBMIT_SUCCESS });
        callback();
      })
      .catch((err) => {
        console.log("FALSE loginUserRequest", err);
        dispatch({ type: USER_LOGIN_FORM_SUBMIT_FAILED });
      });
  };
}

/* thunk проверки пользователя */
export function checkUserAccess(accessToken) {
  return function (dispatch) {
    /* dispatch({ type: CHECK_USER_ACCESS }); */
    checkUserAccessRequest(accessToken)
      .then((res) => console.log("TRUE checkUserAccessRequest", res))
      .catch((err) => {
        console.log("FALSE checkUserAccessRequest", err);
        if (err.message === "jwt malformed") {
          dispatch(refreshUserToken(getCookie("refreshToken")));
        }
      });
  };
}

function refreshUserToken(refreshToken) {
  return function (dispatch) {
    refreshTokenRequest(refreshToken)
      .then((res) => {
        console.log("TRUE refreshTokenRequest", res);

        setCookie("accessToken", parseCookie(res.accessToken), {
          "max-age": 60,
        });
        /* setCookie("refreshToken", res.refreshToken);
        dispatch(checkUserAccess(res.accessToken)); */
      })
      .catch((err) => {
        console.log("FALSE refreshTokenRequest", err);
      });
  };
}
