// Modify fields
export const CHANGE_NEW_PROPERTY_FIELD = 'CHANGE_NEW_PROPERTY_FIELD';
export const changeNewPropertyField = (value, fieldName) => (
  {
    type: CHANGE_NEW_PROPERTY_FIELD,
    value,
    fieldName,
  }
);

// Send form to API
export const ADD_PROPERTY = 'ADD_PROPERTY';
export const addProperty = () => ({
  type: ADD_PROPERTY,
});
