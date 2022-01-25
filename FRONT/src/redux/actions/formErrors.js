export const SET_FORM_ERROR = 'SET_FORM_ERROR';
export const setFormError = (value, fieldName) => (
  {
    type: SET_FORM_ERROR,
    value,
    fieldName,
  }
);
