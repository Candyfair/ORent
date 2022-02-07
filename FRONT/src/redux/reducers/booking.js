import { SAVE_MY_BOOKING } from '../actions/booking';

export const initialState = {
  bookeremail: '',
  bookerid: '',
  bookername: '',
  created_at: '',
  enddate: '',
  host_id: '',
  id: '',
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
  startdate: '',
  updated_at: '',
  vacancy_id: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_MY_BOOKING:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export default reducer;
