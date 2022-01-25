import {
  SET_LOADING,
  SET_REDIRECT_TO_FALSE,
  SET_REDIRECT_TO_TRUE,
  SET_SNACKBAR,
  SHOW_PASSWORD,
  // SET_MODE,
} from '../actions/displayOptions';

export const initialState = {
  loading: false,
  // mode: 'light',
  redirect: false,
  showPasswordStatus: false,
  snackbar: false,
  snackbarStatus: 'success',
  SnackbarMessage: '',
  vertical: 'top',
  horizontal: 'center',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.value,
      };
      // case SET_MODE:
      //     return {
      //         ...state,
      //         mode: action.value,
      //     }
    case SHOW_PASSWORD:
      return {
        ...state,
        showPasswordStatus: action.value,
      };
    case SET_REDIRECT_TO_TRUE:
      return {
        ...state,
        redirect: true,
      };
    case SET_REDIRECT_TO_FALSE:
      return {
        ...state,
        redirect: false,
      };
    case SET_SNACKBAR:
      return {
        ...state,
        snackbar: action.value,
        snackbarStatus: action.status,
        SnackbarMessage: action.message,
      };
    default:
      return state;
  }
};

export default reducer;
