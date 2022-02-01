import { CHANGE_PASSWORD_SWITCH, CHANGE_UPDATE_USER_FIELD, SAVE_UPDATE_USER_INFOS, SAVE_USER_INFOS } from '../actions/userUpdate';

export const initialState = {
  id: '',
  username: '',
  firstname: '',
  lastname: '',
  email: '',
  createdat: '',
  updatedat: '',
  bookings: [],
  password: '',
  newPassword: '',
  newPasswordVerification: '',
  changePassword: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_INFOS:
      return {
        ...state,
        ...action.data,
      };
    case SAVE_UPDATE_USER_INFOS:
      return {
        ...state,
        ...action.data,
        password: '',
        newPassword: '',
        newPasswordVerification: '',
      };
    case CHANGE_UPDATE_USER_FIELD:
    return {
        ...state,
        [action.fieldName]: action.value,
    };
    case CHANGE_PASSWORD_SWITCH:
      return {
          ...state,
          changePassword: !state.changePassword
      };
    default:
      return state;
  }
};

export default reducer;
