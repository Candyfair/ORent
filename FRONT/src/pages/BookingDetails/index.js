// === IMPORTS
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import {
  Box, Button, Stack, Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import BookingDetailsComp from '../../components/BookingDetailsComp';
import { fetchBookingDetails } from '../../redux/actions/bookingDetailsFetch';

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
  const dispatch = useDispatch();
  const { bookingDetails } = useSelector((state) => state.bookingDetails);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchBookingDetails(id));
  }, []);

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
        Your stay at {bookingDetails.propertyhost}'s place
      </Typography>
      <Stack
        flexDirection="row"
        gap={1}
        className={classes.container}
      >
        <Stack
          className={classes.imageSide}
        >
          <Box
            sx={{
              borderRadius: 1,
              bgcolor: 'grey.200',
              width: '100%',
              height: '70vh',
            }}
          />
        </Stack>
        <BookingDetailsComp
          startDate={bookingDetails.startdate}
          endDate={bookingDetails.enddate}
          streetNumber={bookingDetails.propertystreetnumber}
          streetName={bookingDetails.propertystreetname}
          zipCode={bookingDetails.propertyzipcode}
          city={bookingDetails.propertycity}
          country={bookingDetails.propertycountry}
          hostName={bookingDetails.propertyhost}
          hostEmail={bookingDetails.propertyhostemail}
          weekprice={bookingDetails.weekprice}
        />
      </Stack>
      <Button
        variant="text"
        className={classes.showlisting}
        onClick={() => navigate(`/homes/${bookingDetails.propertyslug}/${bookingDetails.propertyid}`)}
      >
        Show listing
      </Button>
    </Stack>

  );
};

export default BookingDetails;
