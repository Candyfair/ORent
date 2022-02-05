import { SAVE_BOOKING_DETAILS } from '../actions/bookingDetailsFetch';

export const initialState = {
  bookingDetails: {
    id: '',
    bookerid: '',
    vacancy_id: '',
    created_at: '',
    updated_at: null,
    startdate: '',
    enddate: '',
    images: [],
    propertyid: '',
    propertyname: '',
    propertyslug: '',
    propertydescription: '',
    propertycapacity: '',
    propertybedroomscount: '',
    propertybedscount: '',
    propertybathroomcount: '',
    propertytype: '',
    propertystreetnumber: 0,
    propertystreetname: '',
    propertyzipcode: 0,
    propertycity: '',
    propertycountry: '',
    propertylatitude: '',
    propertylongitude: '',
    host_id: '',
    propertyhost: '',
    propertyhostemail: '',
    weekprice: 0,
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_BOOKING_DETAILS:
      return {
        ...state,
        bookingDetails: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
