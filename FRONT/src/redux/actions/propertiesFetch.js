export const FETCH_PROPERTIES = 'FETCH_PROPERTIES';
export const fetchProperties = () => ({
  type: FETCH_PROPERTIES,
});

export const SAVE_PROPERTIES_LIST = 'SAVE_PROPERTIES_LIST';
export const savePropertiesList = (data) => ({
  type: SAVE_PROPERTIES_LIST,
  data,
});
