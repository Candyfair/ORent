import { SET_END_DATE, SET_START_DATE } from '../actions/vacancy';

export const initialState = {
  startDate: null,
  endDate: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_START_DATE:
      return {
        ...state,
        startDate: action.value,
      };
    case SET_END_DATE:
      return {
        ...state,
        endDate: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
