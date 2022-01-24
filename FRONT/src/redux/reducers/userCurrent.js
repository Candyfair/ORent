import {
  CHANGE_CURRENT_USER_FIELD,
  CONNECT_USER,
  DISCONNECT_USER,
  SET_LOGGED,
  // SAVE_BOOKMARKED_CARDS,
  // UPDATE_USER_DATA,
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
  // newPassword: '',
  // newEmail: '',
  // newPasswordVerification: '',
  // thumb: 'favorites',
  // bookmarks: [],
  // bookmarkedCards: [],
  // contributions: [],
  // createdAt: '',
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
        // newEmail: '',
        // newPassword: '',
        // newPasswordVerification: '',
        // thumb: 'favorites',
        // bookmarks: [],
        // bookmarkedCards: [],
        // contributions: [],
        // createdAt: '',
      };
      // case SAVE_BOOKMARKED_CARDS:
      //     const height: randomIntFromInterval(250, 350)
      //     return {
      //         ...state,
      //         bookmarkedCards: action.data.map((card) => ({ ...card, height })),
      //     };
      // case UPDATE_USER_DATA:
      //     return{
      //         ...state,
      //         [action.fieldName]: action.data
      //     }
    // case ADD_ID_TO_USER_BOOKMARKS:
    //   return {
    //     ...state,
    //     bookmarks: [...state.bookmarks, action.data],
    //   };
    default:
      return state;
  }
};

export default reducer;
