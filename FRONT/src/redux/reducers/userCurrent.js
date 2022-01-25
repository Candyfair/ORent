import {
  CHANGE_CURRENT_USER_FIELD,
  CONNECT_USER,
  DISCONNECT_USER,
  SET_LOGGED,
} from '../actions/userCurrent';

export const initialState = {
  isLogged: false,
  id: '',
  email: '',
  loginEmailError: false,
  username: '',
  password: '',
  loginPasswordError: false,
  connexionErrorValue: false,
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
    case DISCONNECT_USER:
      return {
        ...state,
        isLogged: false,
        id: '',
        email: '',
        username: '',
        password: '',
        connexionErrorValue: false,
      };
    default:
      return state;
  }
};

export default reducer;
