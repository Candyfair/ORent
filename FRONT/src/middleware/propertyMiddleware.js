import { setLoading } from '../redux/actions/displayOptions';
import { FETCH_PROPERTIES, FETCH_PROPERTY, savePropertiesList, savePropertyDetails } from '../redux/actions/propertiesFetch';
import api from './api';

const propertyMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PROPERTIES: {
      console.log('Je suis bien dans le properties middleware sur la route GET /properties');
      store.dispatch(setLoading(true));
      api.get(
        '/properties',
      )
        .then(
          (response) => {
            console.log('Fetch properties réussi : ', response);
            store.dispatch(savePropertiesList(response.data));
            store.dispatch(setLoading(false));
          },
        )
        .catch(
          (error) => {
            console.log('Error Fetch properties: ', error);
            store.dispatch(setLoading(false));
          },
        );
      next(action);
      break;
    }

    case FETCH_PROPERTY: {
      console.log(`Je suis bien dans le properties middleware sur la route GET /properties/${action.id}`);
      store.dispatch(setLoading(true));
      api.get(
        `/properties/${action.id}`,
      )
        .then(
          (response) => {
            console.log('Fetch property details réussi : ', response);
            store.dispatch(savePropertyDetails(response.data));
            store.dispatch(setLoading(false));
          },
        )
        .catch(
          (error) => {
            console.log('Error Fetch property details: ', error);
            store.dispatch(setLoading(false));
          },
        );
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default propertyMiddleware;
