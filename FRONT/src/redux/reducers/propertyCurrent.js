import { SAVE_MY_PROPERTIES, SAVE_PROPERTIES_LIST, SAVE_PROPERTY_DETAILS } from '../actions/propertiesFetch';
import { CHANGE_CURRENT_PROPERTY_FIELD } from '../actions/propertyCreate';
import { SET_NEW_VACANCY, SET_PROPERTY_VACANCIES } from '../actions/vacancy';

export const initialState = {
  propertiesList: [],
  propertyDetails: '',
  myProperties: [],
  propertyVacancies: [],
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
    case SAVE_MY_PROPERTIES:
      return {
        ...state,
        myProperties: action.data,
      };
    case SET_PROPERTY_VACANCIES:
      return {
        ...state,
        propertyVacancies: action.data,
      };
    case SET_NEW_VACANCY:
      return {
        ...state,
        propertyVacancies: [...state.propertyVacancies, action.data],
      };
    case CHANGE_CURRENT_PROPERTY_FIELD:
      return {
        ...state,
        propertyDetails: { ...state.propertyDetails, [action.fieldname]: action.value },
      };
    default:
      return state;
  }
};

export default reducer;
