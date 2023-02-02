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
} from "../actions/userAction";

const initialState = {
  registerForm: {
    name: "",
    email: "",
    password: "",
  },

  loginForm: {
    email: "",
    password: "",
  },

  user: {
    email: "",
    name: "",
  },

  forgotPasswordForm: {
    email: "",
  },

  resetPasswordForm: {
    password: "",
    token: "",
  },

  isAuth: undefined,

  registrationSubmit: false,
  registrationFailed: false,

  loginSubmit: false,
  loginFailed: false,

  forgotPasswordSubmit: false,
  forgotPasswordFailed: false,
  resetEmailSent: false,

  resetPasswordSubmit: false,
  resetPasswordFailed: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_REGISTER_FORM_SET_VALUE: {
      return {
        ...state,
        registerForm: { ...state.registerForm, [action.field]: action.value },
      };
    }
    case USER_REGISTER_FORM_SUBMIT: {
      return {
        ...state,
        registrationSubmit: true,
      };
    }
    case USER_REGISTER_FORM_SUBMIT_SUCCESS: {
      return {
        ...state,
        registerForm: {
          ...state.registerForm,
          name: "",
          email: "",
          password: "",
        },
        isAuth: true,
      };
    }
    case USER_REGISTER_FORM_SUBMIT_FAILED: {
      return {
        ...state,
        registrationSubmit: false,
        registrationFailed: true,
      };
    }

    case USER_LOGIN_FORM_SET_VALUE: {
      return {
        ...state,
        loginForm: { ...state.loginForm, [action.field]: action.value },
      };
    }
    case USER_LOGIN_FORM_SUBMIT: {
      return {
        ...state,
        loginSubmit: true,
      };
    }
    case USER_LOGIN_FORM_SUBMIT_SUCCESS: {
      return {
        ...state,
        loginForm: { ...state.loginForm, email: "", password: "" },
        isAuth: true,
      };
    }
    case USER_LOGIN_FORM_SUBMIT_FAILED: {
      return {
        ...state,
        loginSubmit: false,
        loginFailed: true,
      };
    }

    case USER_ACCESS_ALLOWED: {
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload.email,
          name: action.payload.name,
        },
        isAuth: true,
      };
    }
    case USER_ACCESS_DENIED: {
      return {
        ...state,
        isAuth: false,
      };
    }

    case FORGOT_PASSWORD_FORM_SET_VALUE: {
      return {
        ...state,
        forgotPasswordForm: {
          ...state.forgotPasswordForm,
          [action.field]: action.value,
        },
      };
    }
    case FORGOT_PASSWORD_FORM_SUBMIT: {
      return {
        ...state,
        forgotPasswordSubmit: true,
      };
    }
    case FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS: {
      return {
        ...state,
        forgotPasswordForm: {
          ...state.forgotPasswordForm,
          email: "",
        },
        resetEmailSent: true,
      };
    }
    case FORGOT_PASSWORD_FORM_SUBMIT_FAILED: {
      return {
        ...state,
        forgotPasswordSubmit: false,
        forgotPasswordFailed: true,
      };
    }

    case RESET_PASSWORD_FORM_SET_VALUE: {
      return {
        ...state,
        resetPasswordForm: {
          ...state.resetPasswordForm,
          [action.field]: action.value,
        },
      };
    }
    case RESET_PASSWORD_FORM_SUBMIT: {
      return {
        ...state,
        resetPasswordSubmit: true,
      };
    }
    case RESET_PASSWORD_FORM_SUBMIT_SUCCESS: {
      return {
        ...state,
        resetPasswordForm: {
          ...state.resetPasswordForm,
          password: "",
          token: "",
        },
        resetEmailSent: false,
      };
    }
    case RESET_PASSWORD_FORM_SUBMIT_FAILED: {
      return {
        ...state,
        resetPasswordSubmit: false,
        resetPasswordFailed: true,
      };
    }

    default:
      return state;
  }
}
