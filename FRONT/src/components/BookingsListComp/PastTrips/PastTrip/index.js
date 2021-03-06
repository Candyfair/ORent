/* eslint-disable linebreak-style */
// === Imports
import {
  Card, CardContent, CardMedia, Stack, Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

// === MUI
const useStyles = makeStyles((theme) => ({
  propertyCard: {
    [theme.breakpoints.down('md')]: {
      flexDirection: 'row',
    },
  },
  container: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  image: {
    [theme.breakpoints.down('md')]: {
      width: '50%',
      height: '100%',
    },
  },
  content: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  propertyName: {

  },
  city: {

  },
  host: {
    color: theme.palette.primary.main,
    fontWeight: '700',
  },
  dates: {

  },
}));

// === COMPONENT
const PastTrip = () => {
  const classes = useStyles();
  return (
    <>
      <Stack
        className={classes.container}
        width="40%"
        margin="16px auto"
      >
        <Card
          className={classes.propertyCard}
          width="100%"
          sx={{ display: 'flex', flexDirection: 'row' }}
        >
          <CardMedia
            className={classes.image}
            component="img"
            sx={{ width: '30%', height: '100%' }}
            image="https://www.maisons-phenix.com/sites/phenix/files/styles/max_1300x1300/public/annonces/media/Geoxia/316078/02-maisons-phenix-renouveau-pp-r-a-858-sg-3105-n-tendance-arrierejpg.jpg?itok=v2sCw8sT"
            alt="name"
          />
          <CardContent>
            <Stack
              className={classes.content}
              flexDirection="column"
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
                Hosted by xxxx
              </Typography>
              <Typography
                className={classes.dates}
                variant="subtitle1"
                component="h5"
                marginBottom="28px"
              >
                From 01/08/2021 to 25/08/2021
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </>

  );
};

export default PastTrip;
