// === IMPORTS
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import moment from 'moment';
import {
  Card, CardMedia, CardContent, Typography, Stack, Button,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Loader from '../Loader';

// === MUI
const useStyles = makeStyles((theme) => ({
  comingTrips: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '99%',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  image: {
    width: '30%',
    height: '250px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  content: {
    width: '70%',
    height: '250px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: theme.spacing(1),
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
const ComingTrips = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const { myBookings } = useSelector((state) => state.booking);

  const now = new Date();
  const myComingTrip = myBookings.find((myBooking) => new Date(myBooking.enddate) >= now);

  const { loading } = useSelector((state) => state.displayOptions);
  if (loading) return <Loader />;

  return (
    myComingTrip
      ? (
        <Card
          className={classes.comingTrips}
        >
          <CardMedia
            className={classes.image}
            component="img"
            image={myComingTrip.images[myComingTrip.images.length - 1]}
            alt={myComingTrip.propertyname}
          />
          <CardContent
            className={classes.content}
          >
            <Typography
              className={classes.propertyName}
              variant="h5"
              component="h3"
            >
              {myComingTrip.propertyname}
            </Typography>
            <Typography
              className={classes.city}
              variant="subtitle1"
              component="h5"
            >
              {myComingTrip.propertycity}
            </Typography>
            <Typography
              className={classes.host}
              variant="subtitle1"
              component="h5"
            >
              Hosted by <span className={classes.hostName}>{myComingTrip.propertyhost}</span>
            </Typography>
            <Typography
              className={classes.dates}
              variant="subtitle1"
              component="h5"
            >
              From {moment(myComingTrip.startdate).format('DD/MM/YYYY')} to {moment(myComingTrip.enddate).format('DD/MM/YYYY')}
            </Typography>
            <Stack
              flexDirection="row"
              gap={2}
            >
              <Button
                variant="text"
                startIcon={<ArtTrackIcon sx={{ fontSize: '25px' }} />}
                onClick={() => navigate(`/homes/${myComingTrip.propertyslug}/${myComingTrip.propertyid}`)}
              >
                Listing
              </Button>
              <Button
                className={classes.buttonDetails}
                variant="contained"
                startIcon={<LibraryBooksIcon />}
                disableElevation
                onClick={() => navigate(`/${myComingTrip.bookername}/trips/${myComingTrip.id}`)}
              >
                Details
              </Button>
            </Stack>
          </CardContent>
        </Card>
      )
      : (
        <Typography>
          No coming trips.
        </Typography>
      )

  );
};

export default ComingTrips;
