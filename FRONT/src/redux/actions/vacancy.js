export const SET_START_DATE = 'SET_START_DATE';
export const setStartDate = (value) => ({
  type: SET_START_DATE,
  value,
});

export const SET_END_DATE = 'SET_END_DATE';
export const setEndDate = (value) => ({
  type: SET_END_DATE,
  value,
});

export const ADD_VACANCY = 'ADD_VACANCY';
export const addVacancy = (propertyId) => ({
  type: ADD_VACANCY,
  propertyId,
});

export const FETCH_PROPERTY_VACANCIES = 'FETCH_PROPERTY_VACANCIES';
export const fetchPropertyVacancies = (propertyId) => ({
  type: FETCH_PROPERTY_VACANCIES,
  propertyId,
});

export const SET_PROPERTY_VACANCIES = 'SET_PROPERTY_VACANCIES';
export const setPropertyVacancies = (data) => ({
  type: SET_PROPERTY_VACANCIES,
  data,
});

export const SET_NEW_VACANCY = 'SET_NEW_VACANCY';
export const setNewVacancy = (data) => ({
  type: SET_NEW_VACANCY,
  data,
});

export const RESET_CALENDAR = 'RESET_CALENDAR';
export const resetCalendar = () => ({
  type: RESET_CALENDAR,
});

export const DELETE_VACANCY = 'DELETE_VACANCY';
export const deleteVacancy = (vacancyId, propertyId) => ({
  type: DELETE_VACANCY,
  vacancyId,
  propertyId,
});
