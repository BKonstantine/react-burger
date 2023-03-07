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
import {
  IRegisterUserRequest,
  ILoginUserRequest,
  IResetPasswordRequest,
  IChangeUserDataRequest,
  IUser,
  ISetRegisterFormValue,
  IUserRegisterFormSubmit,
  IUserRegisterFormSubmitSuccess,
  IUserRegisterFormSubmitFailed,
  ISetLoginFormValue,
  IUserLoginFormSubmit,
  IUserLoginFormSubmitSuccess,
  IUserLoginFormSubmitFailed,
  IUserAccessDenied,
  IUserAccessAllowed,
  ISetForgotPasswordFormValue,
  IForgotPasswordFormSubmit,
  IForgotPasswordFormSubmitSuccess,
  IForgotPasswordFormSubmitFailed,
  ISetResetPasswordFormValue,
  IResetPasswordFormSubmit,
  IResetPasswordFormSubmitSuccess,
  IResetPasswordFormSubmitFailed,
  IChangeUserDataFormSubmit,
  IChangeUserDataFormSubmitSuccess,
  IChangeUserDataFormSubmitFailed,
} from "../types/data";
import { AppDispatch } from "../types/index";

export const setRegisterFormValue = (
  field: string,
  value: string
): ISetRegisterFormValue => {
  return {
    type: USER_REGISTER_FORM_SET_VALUE,
    field,
    value,
  };
};
const userRegisterFormSubmit = (): IUserRegisterFormSubmit => {
  return {
    type: USER_REGISTER_FORM_SUBMIT,
  };
};
const userRegisterFormSubmitSuccess = (): IUserRegisterFormSubmitSuccess => {
  return {
    type: USER_REGISTER_FORM_SUBMIT_SUCCESS,
  };
};
const userRegisterFormSubmitFailed = (): IUserRegisterFormSubmitFailed => {
  return {
    type: USER_REGISTER_FORM_SUBMIT_FAILED,
  };
};

export const setLoginFormValue = (
  field: string,
  value: string
): ISetLoginFormValue => {
  return {
    type: USER_LOGIN_FORM_SET_VALUE,
    field,
    value,
  };
};
const userLoginFormSubmit = (): IUserLoginFormSubmit => {
  return {
    type: USER_LOGIN_FORM_SUBMIT,
  };
};
const userLoginFormSubmitSuccess = (
  user: IUser
): IUserLoginFormSubmitSuccess => {
  return {
    type: USER_LOGIN_FORM_SUBMIT_SUCCESS,
    payload: user,
  };
};
const userLoginFormSubmitFailed = (): IUserLoginFormSubmitFailed => {
  return {
    type: USER_LOGIN_FORM_SUBMIT_FAILED,
  };
};

const userAccessDenied = (): IUserAccessDenied => {
  return {
    type: USER_ACCESS_DENIED,
  };
};
const userAccessAllowed = (user: IUser): IUserAccessAllowed => {
  return {
    type: USER_ACCESS_ALLOWED,
    payload: user,
  };
};

export const setForgotPasswordFormValue = (
  field: string,
  value: string
): ISetForgotPasswordFormValue => {
  return {
    type: FORGOT_PASSWORD_FORM_SET_VALUE,
    field,
    value,
  };
};
const forgotPasswordFormSubmit = (): IForgotPasswordFormSubmit => {
  return {
    type: FORGOT_PASSWORD_FORM_SUBMIT,
  };
};
const forgotPasswordFormSubmitSuccess =
  (): IForgotPasswordFormSubmitSuccess => {
    return {
      type: FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS,
    };
  };
const forgotPasswordFormSubmitFailed = (): IForgotPasswordFormSubmitFailed => {
  return {
    type: FORGOT_PASSWORD_FORM_SUBMIT_FAILED,
  };
};

export const setResetPasswordFormValue = (
  field: string,
  value: string
): ISetResetPasswordFormValue => {
  return {
    type: RESET_PASSWORD_FORM_SET_VALUE,
    field,
    value,
  };
};
const resetPasswordFormSubmit = (): IResetPasswordFormSubmit => {
  return {
    type: RESET_PASSWORD_FORM_SUBMIT,
  };
};
const resetPasswordFormSubmitSuccess = (): IResetPasswordFormSubmitSuccess => {
  return {
    type: RESET_PASSWORD_FORM_SUBMIT_SUCCESS,
  };
};
const resetPasswordFormSubmitFailed = (): IResetPasswordFormSubmitFailed => {
  return {
    type: RESET_PASSWORD_FORM_SUBMIT_FAILED,
  };
};

const changeUserDataFormSubmit = (): IChangeUserDataFormSubmit => {
  return {
    type: CHANGE_USER_DATA_FORM_SUBMIT,
  };
};
const changeUserDataFormSubmitSuccess = (
  user: IUser
): IChangeUserDataFormSubmitSuccess => {
  return {
    type: CHANGE_USER_DATA_FORM_SUBMIT_SUCCESS,
    payload: user,
  };
};
const changeUserDataFormSubmitFailed = (): IChangeUserDataFormSubmitFailed => {
  return {
    type: CHANGE_USER_DATA_FORM_SUBMIT_FAILED,
  };
};

/* thunk формы регистрации */
export function registerUser(
  userDate: IRegisterUserRequest,
  callback: () => void
) {
  return function (dispatch: AppDispatch) {
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
export function loginUser(userDate: ILoginUserRequest, callback: () => void) {
  return function (dispatch: AppDispatch) {
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
export function logoutUser(refreshToken: string, callback: () => void) {
  return function (dispatch: AppDispatch) {
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
  return function (dispatch: AppDispatch) {
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
export function refreshUserToken(refreshToken: string) {
  return function (dispatch: AppDispatch) {
    return refreshTokenRequest(refreshToken).then((res) => {
      setCookie("accessToken", parseCookie(res.accessToken));
      setCookie("refreshToken", res.refreshToken);
      dispatch(checkUserAccess(getCookie("accessToken")));
    });
  };
}

/* thunks восстановления пароля */
export function forgotPassword(email: string, callback: () => void) {
  return function (dispatch: AppDispatch) {
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

export function resetPassword(
  userDate: IResetPasswordRequest,
  callback: () => void
) {
  return function (dispatch: AppDispatch) {
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
export function changeUserData(userData: IChangeUserDataRequest) {
  return function (dispatch: AppDispatch) {
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
