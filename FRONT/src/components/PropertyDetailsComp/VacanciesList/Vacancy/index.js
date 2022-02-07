// IMPORTS
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import {
  Stack, Button, Card,
} from '@mui/material/';

import moment from 'moment';
import { makeBooking } from '../../../../redux/actions/booking';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  period: {
    paddingLeft: theme.spacing(2),
  },
}));

// COMPONENT
const Vacancy = ({
  startDate,
  endDate,
  vacancyId,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username } = useSelector((state) => state.userCurrent);

  return (

    <Card variant="outlined">
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack className={classes.period}>
          From {moment(startDate).format('DD/MM/YYYY')} to {moment(endDate).format('DD/MM/YYYY')}
        </Stack>
        <Stack>
          <Button
            variant="text"
            disableElevation
            size="large"
            type="submit"
            onClick={() => {
              dispatch(makeBooking(vacancyId));
              navigate(`/${username}/trips/${vacancyId}`); // tripId = vacancyId ?
            }}
          >
            Book
          </Button>
        </Stack>
      </Stack>
    </Card>

  );
};

Vacancy.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  vacancyId: PropTypes.number.isRequired,
};

export default Vacancy;
