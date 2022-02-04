// === IMPORTS
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PastTrip from './PastTrip';

// === MUI
const useStyles = makeStyles((theme) => ({
  pastTrips: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  gridItem: {
    padding: '16px 0 0 0',
  },
}));

const cards = [1, 2, 3, 4];

// === COMPONENT
const PastTrips = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={2}
      className={classes.pastTrips}
    >
      {cards.map((card) => (
        <Grid
          item
          key={card}
          xs={12}
          md={6}
          className={classes.gridItem}
        >
          <PastTrip />
        </Grid>
      ))}
    </Grid>
  );
};

export default PastTrips;
