import { CHANGE_UPDATE_USER_FIELD, SAVE_USER_INFOS } from '../actions/userUpdate';

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
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_INFOS:
      return {
        ...state,
        ...action.data,
      };
    case CHANGE_UPDATE_USER_FIELD:
    return {
        ...state,
        [action.fieldName]: action.value,
    };
    default:
      return state;
  }
};

export default reducer;
