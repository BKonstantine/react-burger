import {
  PARTICIPANT_REGISTER_FORM_SET_VALUE,
  PARTICIPANT_REGISTER_FORM_SUBMIT,
  PARTICIPANT_REGISTER_FORM_SUBMIT_SUCCESS,
  PARTICIPANT_REGISTER_FORM_SUBMIT_FAILED,
} from "../actions/registrationPageAction";

const initialState = {
  form: {
    name: "",
    email: "",
    password: "",
  },
  registrationSubmit: false,
  registrationFailed: false,
};

export default function registrationPageReducer(state = initialState, action) {
  switch (action.type) {
    case PARTICIPANT_REGISTER_FORM_SET_VALUE: {
      return {
        ...state,
        form: { ...state.form, [action.field]: action.value },
      };
    }

    case PARTICIPANT_REGISTER_FORM_SUBMIT: {
      return {
        ...state,
        registrationSubmit: true,
        registrationFailed: false,
      };
    }

    case PARTICIPANT_REGISTER_FORM_SUBMIT_SUCCESS: {
      return {
        ...state,
        form: { ...state.form },
        registrationSubmit: false,
      };
    }

    case PARTICIPANT_REGISTER_FORM_SUBMIT_FAILED: {
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
