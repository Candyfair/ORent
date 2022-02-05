export const FETCH_BOOKING_DETAILS = 'FETCH_BOOKING_DETAILS';
export const fetchBookingDetails = (id) => ({
  type: FETCH_BOOKING_DETAILS,
  id,
});

export const SAVE_BOOKING_DETAILS = 'SAVE_BOOKING_DETAILS';
export const saveBookingDetails = (data) => ({
  type: SAVE_BOOKING_DETAILS,
  data,
});
