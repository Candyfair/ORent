import {
  ADD_VACANCY, DELETE_VACANCY, FETCH_PROPERTY_VACANCIES, resetCalendar, setNewVacancy, setPropertyVacancies,
} from '../redux/actions/vacancy';
import { setLoading, setSnackbar } from '../redux/actions/displayOptions';

import api from './api';

const vacancyMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_VACANCY: {
      const { startDate, endDate } = store.getState().vacancy;
      const newVacancy = { startDate, endDate, propertyId: action.propertyId };
      store.dispatch(setLoading(true));
      api.post('/vacancies', {
        ...newVacancy,
      })
        .then(
          (response) => {
            console.log('Réussite sur la route POST /vacancies : ', response);
            store.dispatch(setLoading(false));
            store.dispatch(setNewVacancy(response.data));
            store.dispatch(setSnackbar(true, 'The vacancy was successfull added !', 'success'));
            store.dispatch(resetCalendar());
          },
        ).catch((error) => {
          console.log('error sur la route POST /vacancies : ', error);
          store.dispatch(setLoading(false));
          store.dispatch(setSnackbar(true, 'An error occured !', 'error'));
        });
      next(action);
      break;
    }
    case FETCH_PROPERTY_VACANCIES: {
      store.dispatch(setLoading(true));
      api.get(`/vacancies/property/${action.propertyId}`)
        .then(
          (response) => {
            console.log(`Réussite sur la route GET /vacancies/property/${action.propertyId} :`, response);
            store.dispatch(setPropertyVacancies(response.data));
            store.dispatch(setLoading(false));
          },
        ).catch((error) => {
          console.log(`error sur la route GET /vacancies/property/${action.id} :`, error);
          store.dispatch(setLoading(false));
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default vacancyMiddleware;
