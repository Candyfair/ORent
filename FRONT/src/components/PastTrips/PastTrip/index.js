// === IMPORTS
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
  Card, CardContent, CardMedia, Typography, Button, Stack,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

// === MUI
const useStyles = makeStyles((theme) => ({
  pastTrip: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  image: {
    width: '35%',
    height: '250px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    width: '70%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  hostName: {
    color: theme.palette.primary.main,
    fontWeight: 700,
  },
  dates: {
    flexGrow: 1,
  },
  buttonDetails: {
    color: theme.palette.common.white,
  },

}));

// === COMPONENT
const PastTrip = ({ myPastTrip }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (

    <Card
      className={classes.pastTrip}
    >
      <CardMedia
        className={classes.image}
        component="img"
        image={myPastTrip.images[myPastTrip.images.length - 1]}
        alt={myPastTrip.propertyname}
      />
      <CardContent
        className={classes.content}
      >
        <Typography
          className={classes.propertyName}
          variant="h5"
          component="h3"
        >
          {myPastTrip.propertyname}
        </Typography>
        <Typography
          className={classes.city}
          variant="subtitle1"
          component="h5"
        >
          {myPastTrip.propertycity}
        </Typography>
        <Typography
          className={classes.host}
          variant="subtitle1"
          component="h5"
        >
          Hosted by <span className={classes.hostName}>{myPastTrip.propertyhost}</span>
        </Typography>
        <Typography
          className={classes.dates}
          variant="subtitle1"
          component="h5"
        >
          From {moment(myPastTrip.startdate).format('DD/MM/YYYY')} to {moment(myPastTrip.enddate).format('DD/MM/YYYY')}
        </Typography>
        <Stack
          flexDirection="row"
          gap={2}
        >
          <Button
            variant="text"
            startIcon={<ArtTrackIcon sx={{ fontSize: '25px' }} />}
            onClick={() => navigate(`/homes/${myPastTrip.propertyslug}/${myPastTrip.propertyid}`)}
          >
            Listing
          </Button>
          <Button
            className={classes.buttonDetails}
            variant="contained"
            startIcon={<LibraryBooksIcon />}
            disableElevation
            onClick={() => navigate(`/${myPastTrip.bookername}/trips/${myPastTrip.id}`)}
          >
            Details
          </Button>
        </Stack>
      </CardContent>
    </Card>

  );
};

PastTrip.propTypes = {
  myPastTrip: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default PastTrip;
