import { SAVE_MY_BOOKING, SAVE_MY_BOOKINGS } from '../actions/booking';

export const initialState = {
  id: '',
  startdate: '',
  enddate: '',
  bookeremail: '',
  bookerid: '',
  bookername: '',
  created_at: '',
  host_id: '',
  images: [],
  porpertyhostemail: '',
  propertybathroomcount: '',
  propertybedroomscount: '',
  propertybedscount: '',
  propertycapacity: '',
  propertycity: '',
  propertycountry: '',
  propertydescription: '',
  propertyhost: '',
  propertyid: '',
  propertylatitude: '',
  propertylongitude: '',
  propertyname: '',
  propertyslug: '',
  propertystreetname: '',
  propertystreetnumber: '',
  propertytype: '',
  propertyzipcode: '',
  updated_at: '',
  vacancy_id: '',

  myBookings: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_MY_BOOKING:
      return {
        ...state,
        ...action.data,
      };
    case SAVE_MY_BOOKINGS:
      return {
        ...state,
        myBookings: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
