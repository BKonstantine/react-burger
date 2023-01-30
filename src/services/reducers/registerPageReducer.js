import {
  USER_REGISTER_FORM_SET_VALUE,
  USER_REGISTER_FORM_SUBMIT,
  USER_REGISTER_FORM_SUBMIT_SUCCESS,
  USER_REGISTER_FORM_SUBMIT_FAILED,
} from "../actions/userAction";

const initialState = {
  form: {
    name: "",
    email: "",
    password: "",
  },
  registrationSubmit: false,
  registrationFailed: false,
};

export default function registerPageReducer(state = initialState, action) {
  switch (action.type) {
    case USER_REGISTER_FORM_SET_VALUE: {
      return {
        ...state,
        form: { ...state.form, [action.field]: action.value },
      };
    }

    case USER_REGISTER_FORM_SUBMIT: {
      return {
        ...state,
        registrationSubmit: true,
        registrationFailed: false,
      };
    }

    case USER_REGISTER_FORM_SUBMIT_SUCCESS: {
      return {
        ...state,
        form: { ...state.form },
        registrationSubmit: false,
      };
    }

    case USER_REGISTER_FORM_SUBMIT_FAILED: {
      return {
        ...state,
        registrationSubmit: false,
        registrationFailed: true,
      };
    }
    default:
      return state;
  }
}
