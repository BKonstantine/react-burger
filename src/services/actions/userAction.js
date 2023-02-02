import {
  registerUserRequest,
  loginUserRequest,
  checkUserAccessRequest,
  refreshTokenRequest,
  logoutUserRequest,
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

/* Экшены управления доступом пользователя */
export const USER_ACCESS_ALLOWED = "USER_ACCESS_ALLOWED";
export const USER_ACCESS_DENIED = "USER_ACCESS_DENIED";

/* thunk формы регистрации */
export function registerUser(userDate, callback) {
  return function (dispatch) {
    dispatch({ type: USER_REGISTER_FORM_SUBMIT });
    registerUserRequest(userDate)
      .then((res) => {
        console.log("TRUE registerUserRequest", res);
        setCookie("accessToken", parseCookie(res.accessToken));
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
        setCookie("accessToken", parseCookie(res.accessToken));
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

/* thunk выхода пользователя из аккаунта */
export function logoutUser(refreshToken, callback) {
  return function (dispatch) {
    logoutUserRequest(refreshToken)
      .then((res) => {
        dispatch({ type: USER_ACCESS_DENIED });
        console.log("TRUE logoutUserRequest", res);
        deleteCookie("accessToken");
        deleteCookie("refreshToken");
        callback();
      })
      .catch((err) => console.log(err));
  };
}

/* thunk проверки пользователя */
export function checkUserAccess(accessToken) {
  return function (dispatch) {
    checkUserAccessRequest(accessToken)
      .then((res) => {
        console.log("TRUE checkUserAccessRequest", res);
        dispatch({ type: USER_ACCESS_ALLOWED, payload: res.user });
      })
      .catch((err) => {
        console.log("FALSE checkUserAccessRequest", err);
        // dispatch({ type: USER_ACCESS_DENIED });
        if (err.message === "jwt expired") {
          dispatch(refreshUserToken(getCookie("refreshToken")));
        }
      });
  };
}

/* thunk обновления токена */
function refreshUserToken(refreshToken) {
  return function (dispatch) {
    refreshTokenRequest(refreshToken)
      .then((res) => {
        console.log("TRUE refreshTokenRequest", res);
        setCookie("accessToken", parseCookie(res.accessToken));
        setCookie("refreshToken", res.refreshToken);
        dispatch(checkUserAccess(getCookie("accessToken")));
      })
      .catch((err) => {
        console.log("FALSE refreshTokenRequest", err);
      });
  };
}
