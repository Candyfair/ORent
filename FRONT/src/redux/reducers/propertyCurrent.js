import { SAVE_PROPERTIES_LIST } from '../actions/propertiesFetch';

export const initialState = {
  propertiesList: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PROPERTIES_LIST:
      return {
        ...state,
        propertiesList: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
