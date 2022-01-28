import { CHANGE_NEW_PROPERTY_FIELD, CHANGE_NEW_PROPERTY_IMAGES, RESET_NEW_PROPERTY_FIELDS } from '../actions/propertyCreate';

export const initialState = {
  uploadFile: '',
  images: [],
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
    case CHANGE_NEW_PROPERTY_IMAGES: {
      return {
        ...state,
        images: [...state.images, action.value]
      }
    }

    default:
      return state;
  }
};

export default reducer;
