import {
  registerUserRequest,
  loginUserRequest,
  checkUserAccessRequest,
  refreshTokenRequest,
  logoutUserRequest,
  forgotPasswordRequest,
  resetPasswordRequest,
  changeUserDataRequest,
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

/* Экшены управления формой forgot password */
export const FORGOT_PASSWORD_FORM_SET_VALUE = "FORGOT_PASSWORD_FORM_SET_VALUE";
export const FORGOT_PASSWORD_FORM_SUBMIT = "FORGOT_PASSWORD_FORM_SUBMIT";
export const FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS =
  "FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS";
export const FORGOT_PASSWORD_FORM_SUBMIT_FAILED =
  "FORGOT_PASSWORD_FORM_SUBMIT_FAILED";

export function setForgotPasswordFormValue(field, value) {
  return {
    type: FORGOT_PASSWORD_FORM_SET_VALUE,
    field,
    value,
  };
}

/* Экшены управления формой reset password */
export const RESET_PASSWORD_FORM_SET_VALUE = "RESET_PASSWORD_FORM_SET_VALUE";
export const RESET_PASSWORD_FORM_SUBMIT = "RESET_PASSWORD_FORM_SUBMIT";
export const RESET_PASSWORD_FORM_SUBMIT_SUCCESS =
  "RESET_PASSWORD_FORM_SUBMIT_SUCCESS";
export const RESET_PASSWORD_FORM_SUBMIT_FAILED =
  "RESET_PASSWORD_FORM_SUBMIT_FAILED";

export function setResetPasswordFormValue(field, value) {
  return {
    type: RESET_PASSWORD_FORM_SET_VALUE,
    field,
    value,
  };
}

export const CHANGE_USER_DATA_FORM_SUBMIT = "CHANGE_USER_DATA_FORM_SUBMIT";
export const CHANGE_USER_DATA_FORM_SUBMIT_SUCCESS =
  "CHANGE_USER_DATA_FORM_SUBMIT_SUCCESS";
export const CHANGE_USER_DATA_FORM_SUBMIT_FAILED =
  "CHANGE_USER_DATA_FORM_SUBMIT_FAILED";

/* thunk формы регистрации */
export function registerUser(userDate, callback) {
  return function (dispatch) {
    dispatch({ type: USER_REGISTER_FORM_SUBMIT });
    registerUserRequest(userDate)
      .then((res) => {
        setCookie("accessToken", parseCookie(res.accessToken));
        setCookie("refreshToken", res.refreshToken);
      })
      .then(() => {
        dispatch({ type: USER_REGISTER_FORM_SUBMIT_SUCCESS });
        callback();
      })
      .catch((err) => {
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
        setCookie("accessToken", parseCookie(res.accessToken));
        setCookie("refreshToken", res.refreshToken);
      })
      .then(() => {
        dispatch({ type: USER_LOGIN_FORM_SUBMIT_SUCCESS });
        callback();
      })
      .catch((err) => {
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
        deleteCookie("accessToken");
        deleteCookie("refreshToken");
        callback();
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

/* thunk проверки пользователя */
export function checkUserAccess(accessToken) {
  return function (dispatch) {
    checkUserAccessRequest(accessToken)
      .then((res) => {
        dispatch({ type: USER_ACCESS_ALLOWED, payload: res.user });
      })
      .catch((err) => {
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
        setCookie("accessToken", parseCookie(res.accessToken));
        setCookie("refreshToken", res.refreshToken);
        dispatch(checkUserAccess(getCookie("accessToken")));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

/* thunks восстановления пароля */
export function forgotPassword(email, callback) {
  return function (dispatch) {
    dispatch({ type: FORGOT_PASSWORD_FORM_SUBMIT });
    forgotPasswordRequest(email)
      .then((res) => {
        dispatch({ type: FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS });
        callback();
      })
      .catch((err) => {
        dispatch({ type: FORGOT_PASSWORD_FORM_SUBMIT_FAILED });
        console.log(err);
      });
  };
}

export function resetPassword(userDate, callback) {
  return function (dispatch) {
    dispatch({ type: RESET_PASSWORD_FORM_SUBMIT });
    resetPasswordRequest(userDate)
      .then((res) => {
        dispatch({ type: RESET_PASSWORD_FORM_SUBMIT_SUCCESS });
        callback();
      })
      .catch((err) => {
        dispatch({ type: RESET_PASSWORD_FORM_SUBMIT_FAILED });
        console.log(err);
      });
  };
}

export function cahangeUserData(userData) {
  return function (dispatch) {
    dispatch({ type: CHANGE_USER_DATA_FORM_SUBMIT });
    changeUserDataRequest(userData, getCookie("accessToken"))
      .then((res) => {
        dispatch({
          type: CHANGE_USER_DATA_FORM_SUBMIT_SUCCESS,
          payload: res.user,
        });
      })
      .catch((err) => {
        dispatch({ type: CHANGE_USER_DATA_FORM_SUBMIT_FAILED });
        console.log(err);
      });
  };
}
