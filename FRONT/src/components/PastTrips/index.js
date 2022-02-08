// === IMPORTS
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux';
import Loader from '../Loader';
import PastTrip from './PastTrip';

// === MUI
const useStyles = makeStyles(() => ({
  pastTrips: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  gridItem: {
    padding: '16px 0 0 0',
  },
}));

// === COMPONENT
const PastTrips = () => {
  const classes = useStyles();

  const { myBookings } = useSelector((state) => state.booking);
  const now = new Date();
  const myPastTrips = myBookings.filter((myBooking) => new Date(myBooking.enddate) < now);

  const { loading } = useSelector((state) => state.displayOptions);
  if (loading) return <Loader />;

  if (myPastTrips.length === 0) {
    return (
      <Typography>
        No past trips.
      </Typography>
    );
  }

  return (
    <Grid
      container
      spacing={2}
      className={classes.pastTrips}
    >
      {myPastTrips.map((myPastTrip) => (
        <Grid
          item
          key={myPastTrip.id}
          xs={12}
          md={6}
          className={classes.gridItem}
        >
          <PastTrip
            myPastTrip={myPastTrip}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default PastTrips;
