import {
  FETCH_MY_BOOKING,
  FETCH_MY_BOOKINGS, MAKE_BOOKING, saveMyBooking, saveMyBookings, sendBookingMails, SEND_BOOKING_MAILS,
} from '../redux/actions/booking';
import { setLoading, setSnackbar } from '../redux/actions/displayOptions';
import { setModal } from '../redux/actions/modals';
import { fetchPropertyVacancies } from '../redux/actions/vacancy';
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
            store.dispatch(setSnackbar(true, 'Your booking was successfully added ! You can see your booking details on the section myTrips', 'success'));
            store.dispatch(saveMyBooking(response.data));
            store.dispatch(fetchPropertyVacancies(response.data.propertyid));
            store.dispatch(sendBookingMails(response.data))
            store.dispatch(setModal(false, ''));
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
    case FETCH_MY_BOOKINGS: {
      store.dispatch(setLoading(true));
      console.log('Je suis bien sur la route GET /bookings/me');

      api.get('/bookings/me')
        .then(
          (response) => {
            console.log('Retour positif, voici mes bookings :', response);
            store.dispatch(saveMyBookings(response.data));
            store.dispatch(setLoading(false));
          },
        ).catch((error) => {
          console.log('error sur la route GET /bookings/me : ', error);
          store.dispatch(setLoading(false));
        });
      next(action);
      break;
    }
    case FETCH_MY_BOOKING: {
      store.dispatch(setLoading(true));
      console.log(`Je suis bien sur la route GET /bookings/${action.bookingId}`);

      api.get(`/bookings/${action.bookingId}`)
        .then(
          (response) => {
            console.log('Retour positif, voici mon booking :', response);
            store.dispatch(saveMyBooking(response.data));
            store.dispatch(setLoading(false));
          },
        ).catch((error) => {
          console.log(`error sur la route GET /bookings/${action.bookingId} : `, error);
          store.dispatch(setLoading(false));
        });
      next(action);
      break;
    }

    case SEND_BOOKING_MAILS: {
      console.log(`Je suis bien sur la route POST /bookings/mailing`);

      api.post(`/bookings/mailing`,
        action.data,
      )
        .then(
          (response) => {
            console.log('Retour positif, les mails ont bien été envoyés :', response);
          },
        ).catch((error) => {
          console.log(`error sur la route POST /bookings/mailing : `, error);
 
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default bookingMiddleware;
