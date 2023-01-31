import {
  USER_LOGIN_FORM_SET_VALUE,
  USER_LOGIN_FORM_SUBMIT,
  USER_LOGIN_FORM_SUBMIT_SUCCESS,
  USER_LOGIN_FORM_SUBMIT_FAILED,
} from "../actions/userAction";

const initialState = {
  form: {
    email: "",
    password: "",
  },
  isAuth: false,
  loginSubmit: false,
  loginFailed: false,
};

export default function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN_FORM_SET_VALUE: {
      return {
        ...state,
        form: { ...state.form, [action.field]: action.value },
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
        form: { ...state.form },
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
    default:
      return state;
  }
}
