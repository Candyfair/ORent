import { RESET_CALENDAR, SET_END_DATE, SET_START_DATE, SET_VACANCY_ID } from '../actions/vacancy';

export const initialState = {
  startDate: '',
  endDate: '',
  vacancyId: '',
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
    case RESET_CALENDAR:
      return {
        ...state,
        startDate: '',
        endDate: '',
      };
    case SET_VACANCY_ID:
      return {
        ...state,
        vacancyId: action.vacancyId,
      }
    default:
      return state;
  }
};

export default reducer;
