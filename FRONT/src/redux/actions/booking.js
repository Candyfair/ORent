// Send form to API
export const MAKE_BOOKING = 'MAKE_BOOKING';
export const makeBooking = (vacancyId) => ({
  type: MAKE_BOOKING,
  vacancyId,
});

export const SAVE_MY_BOOKING = 'SAVE_MY_BOOKING';
export const saveMyBooking = (data) => ({
  type: SAVE_MY_BOOKING,
  data,
});

export const FETCH_MY_BOOKING = 'FETCH_MY_BOOKING';
export const fetchMyBooking = (bookingId) => ({
  type: FETCH_MY_BOOKING,
  bookingId,
});

export const FETCH_MY_BOOKINGS = 'FETCH_MY_BOOKINGS';
export const fetchMyBookings = () => ({
  type: FETCH_MY_BOOKINGS,
});

export const SAVE_MY_BOOKINGS = 'SAVE_MY_BOOKINGS';
export const saveMyBookings = (data) => ({
  type: SAVE_MY_BOOKINGS,
  data,
});

export const SEND_BOOKING_MAILS = 'SEND_BOOKING_MAILS';
export const sendBookingMails = (data) => ({
  type: SEND_BOOKING_MAILS,
  data,
});