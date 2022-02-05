// IMPORTS
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import {
  Stack, Button, Card, Typography,
} from '@mui/material/';

import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { setModal } from '../../../../redux/actions/modals';

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
}) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { isLogged } = useSelector((state) => state.userCurrent);

  if (!isLogged) return null;

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
            onClick={() => dispatch(setModal(false, 'login'))}
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
};

export default Vacancy;
