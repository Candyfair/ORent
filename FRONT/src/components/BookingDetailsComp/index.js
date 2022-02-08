import { useSelector } from 'react-redux';
import moment from 'moment';
import { Button, Card, CardContent, CardMedia, Divider, Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router';
import { Box } from '@mui/system';

import LuggageIcon from '@mui/icons-material/Luggage';
import HomeIcon from '@mui/icons-material/Home';

import { capitalizeFirstLetter } from '../../utils/utils';
import Loader from '../Loader';

const useStyles = makeStyles((theme) => ({
  BookingDetailsComp: {
    display: 'flex',
    flexDirection: 'row',
    height: '70vh',
    width: '100%',
    boxShadow: theme.custom.shadow.primaryTop,
    [theme.breakpoints.down('md')]:{
      flexDirection: 'column',
      height: '100%',
    }
  },
  image:{

    height: '100%',
    width: '50%',
    objectFit: 'cover',
    [theme.breakpoints.down('md')]:{
      width: '100%',
    }
  },
  '.MuiCardMedia-media': {
    border: "none",
    boxShadow: "none",
    outline: 'none',
  },
  content: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
    [theme.breakpoints.down('md')]:{
      width: '100%',
    }
  },
  contentBlock: {
    width: '100%',
  },
  fieldset: {

  },
  dates: {

  },
  address: {
    marginLeft: theme.spacing(4),
  },
  contact: {
    marginLeft: theme.spacing(4),
  },
  price: {
    marginLeft: theme.spacing(4),
  },
  check: {
    borderRadius: 5,
    border: `3px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(2),
    gap: theme.spacing(2)
  },
  titles: {
    textTransform: 'uppercase',
    fontWeight: 700,
    marginBotton: theme.spacing(1),
  },
  fieldset: {
    height: '100%',
    width: '15%'
  },
  email: {
    fontWeight: 700
  },
  buttonDetails: {
    color: theme.palette.common.white,
  },
}));

const BookingDetailsComp = () => {
  const navigate = useNavigate();

  const { username } = useSelector((state) => state.userCurrent);
  const { loading } = useSelector((state) => state.displayOptions);

  const {
    startdate,
    enddate,
    propertystreetnumber,
    propertystreetname,
    propertyzipcode,
    propertycity,
    propertycountry,
    propertyhost,
    propertytype,
    propertyhostemail,
    propertyweekprice,
    propertyslug,
    propertyid,
    images,
  } = useSelector((state) => state.booking);

  const classes = useStyles();

  if (loading) return <Loader />
  
  return (
    <Card
      className={classes.BookingDetailsComp}
    >
      <CardMedia      
        component='img'
        height='100%'
        className={classes.image}
        image={images[0]}
      />

      <CardContent
        className={classes.content}
      >
        <Stack
          flexDirection='row'
          flexGrow={1}
          className={`${classes.dates} ${classes.contentBlock}`}
        >
          <Stack
            alignItems='center'
            justifyContent='space-evenly'
            flexDirection='row'
            width='100%'
          >
            <Stack
              alignItems='center'
              className={classes.check}
            >
              <Typography
                className={classes.titles}
              >
                Check-in
              </Typography>
              <Typography
                variant='subtitle1'
              >
                {moment(startdate).format('DD/MM/YYYY')}
              </Typography>
            </Stack>
            <Stack
              alignItems='center'
              className={classes.check}
            >
              <Typography
                className={classes.titles}
              >
                Check-out
              </Typography>
              <Typography
                variant='subtitle1'
              >
                {moment(enddate).format('DD/MM/YYYY')}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Divider />
        <Stack
          flexDirection='column'
          className={`${classes.address} ${classes.contentBlock}`}
        >
          <Typography
            className={classes.titles}
          >
            Address
          </Typography>
          <Typography>
            {capitalizeFirstLetter(propertyhost)}'s {propertytype}
          </Typography>
          <Typography>
              {propertystreetnumber}, {propertystreetname}
          </Typography>
          <Typography>
            {propertycity}
          </Typography>
          <Typography>
            {propertycountry}
          </Typography>
        </Stack>
        <Divider />
        <Stack
          flexDirection='column'
          className={`${classes.contact} ${classes.contentBlock}`}
        >
          <Typography
            className={classes.titles}
          >
            Contact
          </Typography>
          <Typography>
            {propertyhost}'s email address : <span className={classes.email}>{propertyhostemail}</span>
          </Typography>
        </Stack>
        <Divider />
        <Stack
          flexDirection='column'
          flexGrow={1}
          className={`${classes.price} ${classes.contentBlock}`}
        >
          <Typography
            className={classes.titles}
          >
            Price
          </Typography>
          <Typography
            fontWeight={700}
          >
            {propertyweekprice} €
          </Typography>
        </Stack>
        <Stack
          flexDirection='row'
          className={`${classes.buttons}`}
          gap={2}
        >
          <Button
            variant="text"
            startIcon={<LuggageIcon sx={{ fontSize: '25px' }} />}
            onClick={() => navigate(`/${username}/trips`)}
            fullWidth
          >
            Back to My Trips
          </Button>
          <Button
            className={classes.buttonDetails}
            variant="contained"
            startIcon={<HomeIcon />}
            disableElevation
            onClick={() => navigate(`/homes/${propertyslug}/${propertyid}`)}
            fullWidth
          >
            Show Listing
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default BookingDetailsComp;
