import { CHANGE_NEW_PROPERTY_FIELD, RESET_NEW_PROPERTY_FIELDS } from '../actions/propertyCreate';

export const initialState = {
  propertyname: '',
  image: '',
  number: '',
  street: '',
  zipcode: '',
  city: '',
  country: '',
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

    case RESET_NEW_PROPERTY_FIELDS:
      return {
        ...state,
        propertyname: '',
        image: '',
        number: '',
        street: '',
        zipcode: '',
        city: '',
        country: '',
        capacity: '',
        bedrooms: '',
        beds: '',
        bathrooms: '',
        description: '',
        price: '',
      };

    default:
      return state;
  }
};

export default reducer;
