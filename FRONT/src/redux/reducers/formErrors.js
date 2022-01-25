import { SET_FORM_ERROR } from '../actions/formErrors';

export const initialState = {
  loginEmailError: false,
  loginPasswordError: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_FORM_ERROR:
      return {
        ...state,
        [action.fieldName]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
