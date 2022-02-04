import { ADD_VACANCY, FETCH_PROPERTY_VACANCIES, setNewVacancy, setPropertyVacancies } from '../redux/actions/vacancy';
import { setSnackbar } from '../redux/actions/displayOptions';

import api from './api';

const vacancyMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_VACANCY: {
      const { startDate, endDate } = store.getState().vacancy;
      const newVacancy = { startDate, endDate, propertyId: action.propertyId };

      api.post('/vacancies', {
        ...newVacancy,
      })
        .then(
          (response) => {
            console.log('Réussite sur la route POST /vacancies : ', response);
            store.dispatch(setNewVacancy(response.data));
            store.dispatch(setSnackbar(true, 'The vacancy was successfull added !','success'))
          },
        ).catch((error) => {
          console.log('error sur la route POST /vacancies : ', error);
          store.dispatch(setSnackbar(true, 'An error occured !','error'))

        });
      next(action);
      break;
    }
    case FETCH_PROPERTY_VACANCIES: {
      api.get(`/vacancies/property/${action.propertyId}`)
        .then(
          (response) => {
            console.log(`Réussite sur la route GET /vacancies/property/${action.propertyId} :`, response);
            store.dispatch(setPropertyVacancies(response.data));
          },
        ).catch((error) => {
          console.log(`error sur la route GET /vacancies/property/${action.id} :`, error);
        });
    }
    default:
      next(action);
  }
};

export default vacancyMiddleware;
