// === IMPORTS
import { Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ComingTrips from '../../components/ComingTrips';
import PastTrips from '../../components/PastTrips';

// === MUI
const useStyles = makeStyles((theme) => ({
  bookingsList: {

  },
  container: {
    width: '1600px',
  },
  header: {
    [theme.breakpoints.down('md')]: {
      marginTop: '48px',
    },
  },
}));

// === COMPONENT
const BookingsList = () => {
  const classes = useStyles();
  return (
    <Stack
      className={classes.bookingsList}
      justifyContent="center"
      alignItems="center"
      gap={2}
    >
      <Stack
        className={classes.container}
        justifyContent="center"
        alignItems="center"
        gap={3}
      >
        <Typography
          className={classes.header}
          variant="h4"
          component="h3"
        >
          My trips
        </Typography>
        <Typography
          className={classes.header}
          variant="h5"
          component="h4"
        >
          Coming trips
        </Typography>
        <ComingTrips />
        <Typography
          className={classes.header}
          variant="h5"
          component="h4"
        >
          Where have you been
        </Typography>
        <PastTrips />
      </Stack>
    </Stack>
  );
};

export default BookingsList;
