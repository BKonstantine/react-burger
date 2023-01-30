export const PARTICIPANT_REGISTER_FORM_SET_VALUE =
  "PARTICIPANT_REGISTER_FORM_SET_VALUE";
export const PARTICIPANT_REGISTER_FORM_SUBMIT =
  "PARTICIPANT_REGISTER_FORM_SUBMIT";
export const PARTICIPANT_REGISTER_FORM_SUBMIT_SUCCESS =
  "PARTICIPANT_REGISTER_FORM_SUBMIT_SUCCESS";
export const PARTICIPANT_REGISTER_FORM_SUBMIT_FAILED =
  "PARTICIPANT_REGISTER_FORM_SUBMIT_FAILED";

export function setParticipantFormValue(field, value) {
  return {
    type: PARTICIPANT_REGISTER_FORM_SET_VALUE,
    field,
    value,
  };
}
