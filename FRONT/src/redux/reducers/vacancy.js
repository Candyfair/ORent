import { SET_DATE } from '../actions/vacancy';

export const initialState = {
  startDate: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_DATE:
      return {
        ...state,
        startDate: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
