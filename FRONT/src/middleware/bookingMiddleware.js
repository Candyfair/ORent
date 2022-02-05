import { FETCH_BOOKING_DETAILS, saveBookingDetails } from '../redux/actions/bookingDetailsFetch';
import { setLoading } from '../redux/actions/displayOptions';
import api from './api';

const bookingMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_BOOKING_DETAILS: {
      console.log(`Je suis bien dans le booking middleware sur la route GET /booking/${action.id}/me`);
      store.dispatch(setLoading(true));
      api.get(
        `/booking/${action.id}/me`,
      )
        .then(
          (response) => {
            console.log('Fetch booking details réussi : ', response);
            store.dispatch(saveBookingDetails(response.data));
            store.dispatch(setLoading(false));
          },
        )
        .catch(
          (error) => {
            console.log('Error Fetch booking details: ', error);
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

export default bookingMiddleware;
