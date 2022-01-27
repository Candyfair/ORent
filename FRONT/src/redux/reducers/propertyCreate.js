import { CHANGE_NEW_PROPERTY_FIELD } from '../actions/propertyCreate';

export const initialState = {
  propertyname: '',
  number: '',
  street: '',
  zipcode: '',
  city: '',
  countryId: '',
  capacity: '',
  bedrooms: '',
  beds: '',
  bathrooms: '',
  description: '',
  price: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_NEW_PROPERTY_FIELD:
      return {
        ...state,
        [action.fieldName]: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
