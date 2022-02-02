// === IMPORTS
import {
  Box, Button, Stack, Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
// import { useNavigate } from 'react-router';
import BookingDetailsComp from '../../components/BookingDetailsComp';

// === MUI
const useStyles = makeStyles((theme) => ({
  bookingDetails: {

  },
  container: {
    width: '100vw',
    boxShadow: theme.custom.shadow.primary,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  header: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.38rem',
      marginTop: '32px',
      width: '100%',
    },
  },
  imageSide: {
    width: '50%',
    height: '400px',
    marginRight: '16px',
    [theme.breakpoints.down('sm')]: {
      width: '520px',
    },
  },
  showlisting: {

  },

}));

// === COMPONENT
const BookingDetails = () => {
  const classes = useStyles();
  // const navigate = useNavigate();

  return (
    <Stack
      margin="32px"
      className={classes.bookingDetails}
    >
      <Typography
        variant="h5"
        className={classes.header}
        gutterBottom
      >
        Your stay at [username]'s place
      </Typography>
      <Stack
        flexDirection="row"
        gap={1}
        className={classes.container}
      >
        <Stack
          className={classes.imageSide}
        >
          <Box
            sx={{
              borderRadius: 1,
              bgcolor: 'grey.200',
              width: '100%',
              height: '70vh',
            }}
          />
        </Stack>
        <BookingDetailsComp />
      </Stack>
      <Button
        variant="text"
        className={classes.showlisting}
        // onClick={() => navigate(`/homes/${slug}/${id}`)}
      >
        Show listing
      </Button>
    </Stack>

  );
};

export default BookingDetails;
