// Modify fields
export const CHANGE_NEW_USER_FIELD = 'CHANGE_NEW_USER_FIELD';
export const changeNewUserField = (value, fieldName) => (
  {
    type: CHANGE_NEW_USER_FIELD,
    value,
    fieldName,
  }
);

// Empty fields
export const RESET_NEW_USER_FIELDS = 'RESET_NEW_USER_FIELDS';
export const resetNewUserFields = () => (
  {
    type: RESET_NEW_USER_FIELDS,
  }
);

// Send form to API
export const REGISTER = 'REGISTER';
export const register = () => (
  {
    type: REGISTER,
  }
);
