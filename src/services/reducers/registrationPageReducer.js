import {
  PARTICIPANT_REGISTER_FORM_SET_VALUE,
  PARTICIPANT_REGISTER_FORM_SUBMIT,
  PARTICIPANT_REGISTER_FORM_SUBMIT_FAILED,
  PARTICIPANT_REGISTER_FORM_SUBMIT_SUCCESS,
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
    default:
      return state;
  }
}
