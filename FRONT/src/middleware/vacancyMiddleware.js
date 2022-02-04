import { ADD_VACANCY, FETCH_PROPERTY_VACANCIES, setPropertyVacancies } from '../redux/actions/vacancy';

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
          },
        ).catch((error) => {
          console.log('error sur la route POST /vacancies : ', error);
        });
      next(action);
      break;
    }
    case FETCH_PROPERTY_VACANCIES: {
      api.get(`/vacancies/property/${action.id}`)
        .then(
          (response) => {
            console.log(`Réussite sur la route GET /vacancies/property/${action.id} :`, response);
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
