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
