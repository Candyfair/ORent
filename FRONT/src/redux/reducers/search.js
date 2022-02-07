import { CHANGE_SEARCH_FIELD } from '../actions/search';

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
    default:
      return state;
  }
};

export default reducer;
