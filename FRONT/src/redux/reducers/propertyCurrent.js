import { SAVE_PROPERTIES_LIST, SAVE_PROPERTY_DETAILS } from '../actions/propertiesFetch';

export const initialState = {
  propertiesList: [],
  propertyDetails: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PROPERTIES_LIST:
      return {
        ...state,
        propertiesList: action.data,
      };
    case SAVE_PROPERTY_DETAILS:
      return {
        ...state,
        propertyDetails: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
