// === IMPORTS
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

import {
  Button, Stack, Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import { useEffect } from 'react';
import BookingDetailsComp from '../../components/BookingDetailsComp';
import Loader from '../../components/Loader';
import { fetchMyBooking } from '../../redux/actions/booking';

// === MUI
const useStyles = makeStyles((theme) => ({
  bookingDetails: {

  },
  header: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.38rem',
      marginTop: '32px',
      width: '100%',
    },
  },
  showlisting: {
    marginTop: theme.spacing(2),
  },

}));

// === COMPONENT
const BookingDetails = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.displayOptions);
  const {
    propertyhost, images, propertyname, propertyslug, propertyid,
  } = useSelector((state) => state.booking);

  const dispatch = useDispatch();
  const { tripId } = useParams();

  useEffect(
    () => {
      dispatch(fetchMyBooking(tripId));
    }, [],
  );

  if (loading) return <Loader />;

  return (
    <Stack
      margin="32px"
      className={classes.bookingDetails}
    >
      <Typography
        variant="h5"
        className={classes.header}
      >
        Your stay at {propertyhost}'s place
      </Typography>
      <BookingDetailsComp />
      <Button
        variant="text"
        className={classes.showlisting}
        onClick={() => navigate('/homes')}
      >
        Show all listings
      </Button>
    </Stack>

  );
};

export default BookingDetails;
