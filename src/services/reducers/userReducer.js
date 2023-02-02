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

  isAuth: undefined,

  registrationSubmit: false,
  registrationFailed: false,

  loginSubmit: false,
  loginFailed: false,
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

    default:
      return state;
  }
}
