// === IMPORTS
import { Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ComingTrips from '../../components/BookingsListComp/ComingTrips';
import PastTrips from '../../components/BookingsListComp/PastTrips';

// === MUI
const useStyles = makeStyles((theme) => ({
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
    <Stack>
      <Typography
        className={classes.header}
        variant="h4"
        component="h3"
        marginTop="16px"
        marginLeft="18px"
      >
        My trips
      </Typography>
      <ComingTrips />
      <PastTrips />
    </Stack>
  );
};

export default BookingsList;
