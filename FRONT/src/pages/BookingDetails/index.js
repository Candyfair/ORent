// === IMPORTS
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import {
  Button, Stack, Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import BookingDetailsComp from '../../components/BookingDetailsComp';
import Loader from '../../components/Loader';

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
  const { propertyDetails } = useSelector((state) => state.propertyCurrent);
  const { startdate, enddate } = useSelector((state) => state.booking);
  console.log('Property détails : ', propertyDetails);

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
        Your stay at {propertyDetails.host}'s place
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
            src={`${propertyDetails.images[0]}`}
            alt={propertyDetails.name}
          />
        </Stack>
        <BookingDetailsComp
          startDate={startdate}
          endDate={enddate}
          streetNumber={propertyDetails.streetnumber}
          streetName={propertyDetails.streetname}
          zipCode={propertyDetails.zipcode}
          city={propertyDetails.city}
          country={propertyDetails.country}
          host={propertyDetails.host}
          hostEmail={propertyDetails.hostemail}
          weekPrice={propertyDetails.weekprice}
        />
      </Stack>
      <Button
        variant="text"
        className={classes.showlisting}
        onClick={() => navigate(`/homes/${propertyDetails.slug}/${propertyDetails.id}`)}
      >
        Show listing
      </Button>
    </Stack>

  );
};

export default BookingDetails;
