// === IMPORTS
import {
  Card, CardContent, CardMedia, Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

// === MUI
const useStyles = makeStyles((theme) => ({
  pastTrip: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      width: '100%',
    },
  },
  image: {
    width: '30%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  content: {
    width: '70%',
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

  },

}));

// === COMPONENT
const PastTrip = () => {
  const classes = useStyles();

  return (
    <Card
      className={classes.pastTrip}
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
      </CardContent>
    </Card>
  );
};

export default PastTrip;
