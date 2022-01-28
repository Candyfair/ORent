// Modify fields
export const CHANGE_NEW_PROPERTY_FIELD = 'CHANGE_NEW_PROPERTY_FIELD';
export const changeNewPropertyField = (value, fieldName) => (
  {
    type: CHANGE_NEW_PROPERTY_FIELD,
    value,
    fieldName,
  }
);

// Empty fields
export const RESET_NEW_PROPERTY_FIELDS = 'RESET_NEW_PROPERTY_FIELDS';
export const resetNewPropertyFields = () => (
  {
    type: RESET_NEW_PROPERTY_FIELDS,
  }
);

// Send form to API
export const ADD_PROPERTY = 'ADD_PROPERTY';
export const addProperty = () => ({
  type: ADD_PROPERTY,
});
