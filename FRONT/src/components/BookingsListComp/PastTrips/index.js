/* eslint-disable linebreak-style */
// === IMPORTS
import { Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PastTrip from './PastTrip';

// === MUI
const useStyles = makeStyles((theme) => ({
  header: {
    [theme.breakpoints.down('md')]: {
      marginTop: '16px',
      marginLeft: '16px',
    },
  },
}));

// === COMPONENT
const PastTrips = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        variant="h5"
        component="h3"
        marginLeft="32px"
        className={classes.header}
      >
        Where you've been
      </Typography>
      <Stack
        flexDirection="row"
        flexWrap="wrap"
        width="100%"
      >
        <PastTrip />
        <PastTrip />
        <PastTrip />
        <PastTrip />
      </Stack>
    </>
  );
};

export default PastTrips;
