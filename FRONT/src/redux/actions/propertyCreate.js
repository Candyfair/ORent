// Modify fields
export const CHANGE_NEW_PROPERTY_FIELD = 'CHANGE_NEW_PROPERTY_FIELD';
export const changeNewPropertyField = (value, fieldName) => (
  {
    type: CHANGE_NEW_PROPERTY_FIELD,
    value,
    fieldName,
  }
);

export const CHANGE_NEW_PROPERTY_IMAGES = 'CHANGE_NEW_PROPERTY_IMAGES';
export const changeNewPropertyImages = (value) => (
  {
    type: CHANGE_NEW_PROPERTY_IMAGES,
    value,
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

export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';
export const uploadImage = () => ({
  type: UPLOAD_IMAGE,
});

export const ADD_PROPERTY_IMAGE = 'ADD_PROPERTY_IMAGE';
export const addPropertyImage = (url, name, propertyId) => ({
  type: ADD_PROPERTY_IMAGE,
  url,
  name,
  propertyId,
});
