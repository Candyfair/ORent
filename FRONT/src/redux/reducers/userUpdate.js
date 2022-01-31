import { CHANGE_NEW_USER_FIELD, RESET_NEW_USER_FIELDS } from '../actions/userCreate';
import { SAVE_USER_INFOS } from '../actions/userUpdate';

export const initialState = {
  userInfos: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_INFOS:
      return {
        ...state,
        userInfos: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
