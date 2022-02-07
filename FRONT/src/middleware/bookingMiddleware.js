import { MAKE_BOOKING, saveMyBooking } from '../redux/actions/booking';
import { setLoading, setSnackbar } from '../redux/actions/displayOptions';
import api from './api';

const bookingMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case MAKE_BOOKING: {
      const { id } = store.getState().userCurrent;
      store.dispatch(setLoading(true));

      const newBooking = {
        userId: id,
        vacancyId: action.vacancyId,
      };

      console.log('bookingInfos : ', newBooking);

      api.post('/bookings', {
        ...newBooking,
      })
        .then(
          (response) => {
            console.log('Retour positif, la réservation a été créée :', response);
            store.dispatch(setSnackbar(true, 'Your booking was successfully added !', 'success'));
            store.dispatch(saveMyBooking(response.data));
            store.dispatch(setLoading(false));
          },
        ).catch((error) => {
          console.log('error sur la route POST /bookings : ', error);
          store.dispatch(setSnackbar(true, 'An error occured !', 'error'));
          store.dispatch(setLoading(false));
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default bookingMiddleware;
