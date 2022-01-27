import { FETCH_PROPERTIES } from '../redux/actions/propertiesFetch';
import api from './api';

const propertyMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PROPERTIES: {
      console.log('Je suis bien dans le properties middleware sur la route GET /properties');

      api.get(
        '/properties',
      )
        .then(
          (response) => {
            console.log('Fetch properties réussi : ', response);
          },
        )
        .catch(
          (error) => console.log('Error Fetch properties: ', error),
        );
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default propertyMiddleware;
