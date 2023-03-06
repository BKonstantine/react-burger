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
import {
  USER_REGISTER_FORM_SET_VALUE,
  USER_REGISTER_FORM_SUBMIT,
  USER_REGISTER_FORM_SUBMIT_SUCCESS,
  USER_REGISTER_FORM_SUBMIT_FAILED,
  USER_LOGIN_FORM_SET_VALUE,
  USER_LOGIN_FORM_SUBMIT,
  USER_LOGIN_FORM_SUBMIT_SUCCESS,
  USER_LOGIN_FORM_SUBMIT_FAILED,
  USER_ACCESS_ALLOWED,
  USER_ACCESS_DENIED,
  FORGOT_PASSWORD_FORM_SET_VALUE,
  FORGOT_PASSWORD_FORM_SUBMIT,
  FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS,
  FORGOT_PASSWORD_FORM_SUBMIT_FAILED,
  RESET_PASSWORD_FORM_SET_VALUE,
  RESET_PASSWORD_FORM_SUBMIT,
  RESET_PASSWORD_FORM_SUBMIT_SUCCESS,
  RESET_PASSWORD_FORM_SUBMIT_FAILED,
  CHANGE_USER_DATA_FORM_SUBMIT,
  CHANGE_USER_DATA_FORM_SUBMIT_SUCCESS,
  CHANGE_USER_DATA_FORM_SUBMIT_FAILED,
} from "../constants/index";

export function setRegisterFormValue(field, value) {
  return {
    type: USER_REGISTER_FORM_SET_VALUE,
    field,
    value,
  };
}
function userRegisterFormSubmit() {
  return {
    type: USER_REGISTER_FORM_SUBMIT,
  };
}
function userRegisterFormSubmitSuccess() {
  return {
    type: USER_REGISTER_FORM_SUBMIT_SUCCESS,
  };
}
function userRegisterFormSubmitFailed() {
  return {
    type: USER_REGISTER_FORM_SUBMIT_FAILED,
  };
}

export function setLoginFormValue(field, value) {
  return {
    type: USER_LOGIN_FORM_SET_VALUE,
    field,
    value,
  };
}
function userLoginFormSubmit() {
  return {
    type: USER_LOGIN_FORM_SUBMIT,
  };
}
function userLoginFormSubmitSuccess(user) {
  return {
    type: USER_LOGIN_FORM_SUBMIT_SUCCESS,
    payload: user,
  };
}
function userLoginFormSubmitFailed() {
  return {
    type: USER_LOGIN_FORM_SUBMIT_FAILED,
  };
}

function userAccessDenied() {
  return {
    type: USER_ACCESS_DENIED,
  };
}
function userAccessAllowed(user) {
  return {
    type: USER_ACCESS_ALLOWED,
    payload: user,
  };
}

export function setForgotPasswordFormValue(field, value) {
  return {
    type: FORGOT_PASSWORD_FORM_SET_VALUE,
    field,
    value,
  };
}
function forgotPasswordFormSubmit() {
  return {
    type: FORGOT_PASSWORD_FORM_SUBMIT,
  };
}
function forgotPasswordFormSubmitSuccess() {
  return {
    type: FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS,
  };
}
function forgotPasswordFormSubmitFailed() {
  return {
    type: FORGOT_PASSWORD_FORM_SUBMIT_FAILED,
  };
}

export function setResetPasswordFormValue(field, value) {
  return {
    type: RESET_PASSWORD_FORM_SET_VALUE,
    field,
    value,
  };
}
function resetPasswordFormSubmit() {
  return {
    type: RESET_PASSWORD_FORM_SUBMIT,
  };
}
function resetPasswordFormSubmitSuccess() {
  return {
    type: RESET_PASSWORD_FORM_SUBMIT_SUCCESS,
  };
}
function resetPasswordFormSubmitFailed() {
  return {
    type: RESET_PASSWORD_FORM_SUBMIT_FAILED,
  };
}

function changeUserDataFormSubmit() {
  return {
    type: CHANGE_USER_DATA_FORM_SUBMIT,
  };
}
function changeUserDataFormSubmitSuccess(user) {
  return {
    type: CHANGE_USER_DATA_FORM_SUBMIT_SUCCESS,
    payload: user,
  };
}
function changeUserDataFormSubmitFailed() {
  return {
    type: CHANGE_USER_DATA_FORM_SUBMIT_FAILED,
  };
}

/* thunk формы регистрации */
export function registerUser(userDate, callback) {
  return function (dispatch) {
    dispatch(userRegisterFormSubmit());
    registerUserRequest(userDate)
      .then((res) => {
        setCookie("accessToken", parseCookie(res.accessToken));
        setCookie("refreshToken", res.refreshToken);
      })
      .then(() => {
        dispatch(userRegisterFormSubmitSuccess());
        callback();
      })
      .catch(() => {
        dispatch(userRegisterFormSubmitFailed());
      });
  };
}

/* thunk формы авторизации */
export function loginUser(userDate, callback) {
  return function (dispatch) {
    dispatch(userLoginFormSubmit());
    loginUserRequest(userDate)
      .then((res) => {
        dispatch(userLoginFormSubmitSuccess(res.user));
        setCookie("accessToken", parseCookie(res.accessToken));
        setCookie("refreshToken", res.refreshToken);
        callback();
      })
      .catch(() => {
        dispatch(userLoginFormSubmitFailed());
      });
  };
}

/* thunk выхода пользователя из аккаунта */
export function logoutUser(refreshToken, callback) {
  return function (dispatch) {
    logoutUserRequest(refreshToken).then(() => {
      dispatch(userAccessDenied());
      deleteCookie("accessToken");
      deleteCookie("refreshToken");
      callback();
    });
  };
}

/* thunk проверки пользователя */
export function checkUserAccess() {
  return function (dispatch) {
    return checkUserAccessRequest(getCookie("accessToken"))
      .then((res) => {
        dispatch(userAccessAllowed(res.user));
      })
      .catch((err) => {
        if (err.message === "jwt expired" || "jwt malformed") {
          dispatch(refreshUserToken(getCookie("refreshToken")));
        }
      });
  };
}

/* thunk обновления токена */
export function refreshUserToken(refreshToken) {
  return function (dispatch) {
    return refreshTokenRequest(refreshToken).then((res) => {
      setCookie("accessToken", parseCookie(res.accessToken));
      setCookie("refreshToken", res.refreshToken);
      dispatch(checkUserAccess(getCookie("accessToken")));
    });
  };
}

/* thunks восстановления пароля */
export function forgotPassword(email, callback) {
  return function (dispatch) {
    dispatch(forgotPasswordFormSubmit());
    forgotPasswordRequest(email)
      .then(() => {
        dispatch(forgotPasswordFormSubmitSuccess());
        callback();
      })
      .catch(() => {
        dispatch(forgotPasswordFormSubmitFailed());
      });
  };
}

export function resetPassword(userDate, callback) {
  return function (dispatch) {
    dispatch(resetPasswordFormSubmit());
    resetPasswordRequest(userDate)
      .then(() => {
        dispatch(resetPasswordFormSubmitSuccess());
        callback();
      })
      .catch(() => {
        dispatch(resetPasswordFormSubmitFailed());
      });
  };
}

/* thunk изменения данных пользователя */
export function changeUserData(userData) {
  return function (dispatch) {
    dispatch(changeUserDataFormSubmit());
    changeUserDataRequest(userData, getCookie("accessToken"))
      .then((res) => {
        dispatch(changeUserDataFormSubmitSuccess(res.user));
      })
      .catch((err) => {
        if (err.message === "jwt expired" || "jwt malformed") {
          dispatch(refreshUserToken(getCookie("refreshToken"))).then(() => {
            changeUserDataRequest(userData, getCookie("accessToken"))
              .then((res) => {
                dispatch(changeUserDataFormSubmitSuccess(res.user));
              })
              .catch(() => {
                dispatch(changeUserDataFormSubmitFailed());
              });
          });
        }
      });
  };
}
