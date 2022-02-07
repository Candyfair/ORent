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
  container: {
    width: '100vw',
    boxShadow: theme.custom.shadow.primary,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  header: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.38rem',
      marginTop: '32px',
      width: '100%',
    },
  },
  imageSide: {
    width: '50%',
    height: '400px',
    marginRight: '16px',
    [theme.breakpoints.down('sm')]: {
      width: '520px',
    },
  },
  showlisting: {

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
        gutterBottom
      >
        Your stay at {propertyhost}'s place
      </Typography>
      <Stack
        flexDirection="row"
        gap={1}
        className={classes.container}
      >
        <Stack
          className={classes.imageSide}
        >
          <img
            src={`${images[0]}`}
            alt={propertyname}
          />
        </Stack>
        <BookingDetailsComp />
      </Stack>
      <Button
        variant="text"
        className={classes.showlisting}
        onClick={() => navigate(`/homes/${propertyslug}/${propertyid}`)}
      >
        Show listing
      </Button>
    </Stack>

  );
};

export default BookingDetails;
