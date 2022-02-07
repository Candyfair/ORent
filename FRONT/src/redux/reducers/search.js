import { CHANGE_SEARCH_FIELD, SAVE_SEARCH_RESULTS } from '../actions/search';

export const initialState = {
  country: 'Destination',
  capacity: '',
  searchResults: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return {
        ...state,
        [action.fieldName]: action.value,
      };
    case SAVE_SEARCH_RESULTS:
        return {
            ...state,
            searchResults: action.data
        }
    default:
      return state;
  }
};

export default reducer;
