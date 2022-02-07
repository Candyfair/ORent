// === IMPORTS
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  Card, CardMedia, CardContent, Typography, Stack, Button,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

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

  return (
    <Card
      className={classes.comingTrips}
    >
      <CardMedia
        className={classes.image}
        component="img"
        image="https://www.maisons-phenix.com/sites/phenix/files/styles/max_1300x1300/public/annonces/media/Geoxia/316078/02-maisons-phenix-renouveau-pp-r-a-858-sg-3105-n-tendance-arrierejpg.jpg?itok=v2sCw8sT"
        alt="name"
      />
      <CardContent
        className={classes.content}
      >
        <Typography
          className={classes.propertyName}
          variant="h5"
          component="h3"
        >
          Name of the property
        </Typography>
        <Typography
          className={classes.city}
          variant="subtitle1"
          component="h5"
        >
          City
        </Typography>
        <Typography
          className={classes.host}
          variant="subtitle1"
          component="h5"
        >
          Hosted by <span className={classes.hostName}>xxxx</span>
        </Typography>
        <Typography
          className={classes.dates}
          variant="subtitle1"
          component="h5"
        >
          From 01/08/2021 to 25/08/2021
        </Typography>
        <Stack
          flexDirection="row"
          gap={2}
        >
          <Button
            variant="text"
            startIcon={<ArtTrackIcon sx={{ fontSize: '25px' }} />}
          >
            Listing
          </Button>
          <Button
            className={classes.buttonDetails}
            variant="contained"
            startIcon={<LibraryBooksIcon />}
            disableElevation
            onClick={() => navigate('/janedoe/trips/3')}
          >
            Details
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ComingTrips;
