/* eslint-disable linebreak-style */
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { makeStyles } from '@mui/styles';
import { Button, Stack, Typography } from '@mui/material';
import { setModal } from '../../../../redux/actions/modals';
import { deleteAccount } from '../../../../redux/actions/userCurrent';
import { makeBooking } from '../../../../redux/actions/booking';

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

const BookWarning = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { isLogged } = useSelector((state) => state.userCurrent);
  const { element } = useSelector((state) => state.modals);
  const { vacancyId } = useSelector((state) => state.vacancy)

  const handleClickBook = () => {
    dispatch(makeBooking(vacancyId))
  }

  if (element !== 'bookWarning') return null;
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
        Do you really want to book this trip?
      </Typography>
      <Stack
        flexDirection='row'
        gap={2}
      >
        <Button
            className={classes.button}
            variant="contained"
            disableElevation
            size="large"
            type="submit"
            onClick={() => dispatch(setModal(false, ''))}
            fullWidth
        >
            No
        </Button>
        <Button
            className={classes.button}
            variant="text"
            disableElevation
            size="large"
            type="submit"
            onClick={handleClickBook}
            fullWidth
        >
            Yes
        </Button>
      </Stack>

    </Stack>
  );
};

export default BookWarning;
