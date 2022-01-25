import {
  CHANGE_CURRENT_USER_FIELD,
  CONNECT_USER,
  DISCONNECT_USER,
  RESET_CURRENT_USER_FIELDS,
  SET_LOGGED,
} from '../actions/userCurrent';

export const initialState = {
  isLogged: false,
  id: '',
  email: '',
  firstname: '',
  lastname: '',
  username: '',
  password: '',
  bookings: [],
  created_at: '',
  updated_at: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_LOGGED:
      return {
        ...state,
        isLogged: action.value,
      };
    case CHANGE_CURRENT_USER_FIELD:
      return {
        ...state,
        [action.fieldName]: action.value,
      };
    case CONNECT_USER:
      return {
        ...state,
        ...action.data,
        isLogged: true,
      };
    case RESET_CURRENT_USER_FIELDS:
      return {
        ...state,
        email: '',
        password: '',
      };
    case DISCONNECT_USER:
      return {
        ...state,
        isLogged: false,
        id: '',
        email: '',
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        bookings: [],
        created_at: '',
        updated_at: '',
      };
    default:
      return state;
  }
};

export default reducer;
