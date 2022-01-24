export const CHANGE_NEW_USER_FIELD = 'CHANGE_NEW_USER_FIELD';
export const changeNewUserField = (value, fieldName) => (
  {
    type: CHANGE_NEW_USER_FIELD,
    value,
    fieldName,
  }
);

export const RESET_NEW_USER_FIELDS = 'RESET_NEW_USER_FIELDS';
export const resetNewUserFields = () => (
  {
    type: RESET_NEW_USER_FIELDS,
  }
);

export const REGISTER = 'REGISTER';
export const register = () => (
  {
    type: REGISTER,
  }
);

export const VERIFY_REGISTER_FIELDS = 'VERIFY_REGISTER_FIELDS';
export const verifyRegisterFields = (fieldValue, fieldName) => (
  {
    type: VERIFY_REGISTER_FIELDS,
    fieldValue,
    fieldName,
  }
);

export const SET_FIELD_AVAILABILITY = 'SET_FIELD_AVAILABILITY';
export const setFieldAvailability = (value, fieldName) => (
  {
    type: SET_FIELD_AVAILABILITY,
    value,
    fieldName,
  }
);

export const PASSWORD_MATCH = 'PASSWORD_MATCH';
export const passwordMatch = (value) => (
  {
    type: PASSWORD_MATCH,
    value,
  }
);
