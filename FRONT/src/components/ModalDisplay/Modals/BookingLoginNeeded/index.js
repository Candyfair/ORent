/* eslint-disable linebreak-style */
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Button, Stack, Typography } from '@mui/material';
import { setModal } from '../../../../redux/actions/modals';

const useStyles = makeStyles((theme) => ({
  BookingLoginNeeded: {
    width: '325px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: '100%',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  title: {

  },
  excerpt: {
    marginBottom: theme.spacing(1),
    color: theme.palette.error.main,
  },
  button: {
    textTransform: 'none',
    ':first-of-type': {
      marginTop: theme.spacing(2),
    },
  },
}));

const BookingLoginNeeded = () => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const { isLogged } = useSelector((state) => state.userCurrent);

  if (!isLogged) return null;

  return (
    <Stack
      className={classes.BookingLoginNeeded}
      flexDirection="column"
      gap={2}
    >
      <Typography
        align="center"
        variant="h6"
        className={classes.title}
      >
        Book a reservation
      </Typography>
      <Typography
        align="center"
        variant="body2"
        className={classes.excerpt}
      >
        To book a reservation, you must be connected !
      </Typography>
      <Button
        className={classes.button}
        variant="contained"
        disableElevation
        size="large"
        type="submit"
        onClick={() => dispatch(setModal(true, 'login'))}
      >
        Login
      </Button>
      <Button
        className={classes.button}
        variant="text"
        disableElevation
        size="large"
        type="submit"
        onClick={() => dispatch(setModal(true, 'signin'))}
      >
        Register
      </Button>
    </Stack>
  );
};

export default BookingLoginNeeded;
