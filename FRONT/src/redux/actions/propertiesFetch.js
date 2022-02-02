export const FETCH_PROPERTIES = 'FETCH_PROPERTIES';
export const fetchProperties = () => ({
  type: FETCH_PROPERTIES,
});

export const SAVE_PROPERTIES_LIST = 'SAVE_PROPERTIES_LIST';
export const savePropertiesList = (data) => ({
  type: SAVE_PROPERTIES_LIST,
  data,
});

export const FETCH_PROPERTY = 'FETCH_PROPERTY';
export const fetchProperty = (id) => ({
  type: FETCH_PROPERTY,
  id,
});

export const SAVE_PROPERTY_DETAILS = 'SAVE_PROPERTY_DETAILS';
export const savePropertyDetails = (data) => ({
  type: SAVE_PROPERTY_DETAILS,
  data,
});

export const FETCH_MY_PROPERTIES = 'FETCH_MY_PROPERTIES';
export const fetchMyProperties = () => ({
  type: FETCH_MY_PROPERTIES,
});

export const SAVE_MY_PROPERTIES = 'SAVE_MY_PROPERTIES';
export const saveMyProperties = (data) => ({
  type: SAVE_MY_PROPERTIES,
  data,
});
