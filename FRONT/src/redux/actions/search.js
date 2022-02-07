export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';
export const changeSearchField = (value, fieldName) => (
  {
    type: CHANGE_SEARCH_FIELD,
    value,
    fieldName
  }
);

export const SEARCH_DESTINATION = 'SEARCH_DESTINATION';
export const searchDestination = (destination, capacity) => ({
    type: SEARCH_DESTINATION,
    destination,
    capacity,
})

export const SAVE_SEARCH_RESULTS = 'SAVE_SEARCH_RESULTS';
export const saveSearchResults = (data) => ({
    type: SAVE_SEARCH_RESULTS,
    data,
})