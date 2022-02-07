import { useParams } from 'react-router';
// IMPORTS
import { makeStyles } from '@mui/styles';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import {
  TextField,
  Stack,
  Typography,
  Button,
  Icon,
} from '@mui/material';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import {
  setStartDate, setEndDate, addVacancy, deleteVacancy,
} from '../../../redux/actions/vacancy';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  period: {
    paddingLeft: theme.spacing(2),
  },
}));

// COMPONENT
export default function Calendar() {
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { startDate, endDate } = useSelector((state) => state.vacancy);
  const { propertyVacancies } = useSelector((state) => state.propertyCurrent);
  const jsxVacancies = propertyVacancies.map((vacancy) => (
    <Stack
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack className={classes.period}>
        - From {moment(vacancy.startdate).format('DD/MM/YYYY')} to {moment(vacancy.enddate).format('DD/MM/YYYY')}
      </Stack>
      <Stack>
        {
        vacancy.booked ? (
          <Typography>
            Booked
          </Typography>
        )
          : (
            <Button
              variant="text"
              disableElevation
              size="large"
              type="submit"
              onClick={() => dispatch(deleteVacancy(vacancy.id, id))}
              startIcon={<Stack direction="row" justifyContent="center" alignItems="center"><DeleteForeverIcon /></Stack>}
            >
              Delete
            </Button>
          )
      }
      </Stack>
    </Stack>
  ));

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={2}
    >
      <TextField
        id="date"
        label="Start date"
        type="date"
        value={startDate}
        onChange={(e) => dispatch(setStartDate(e.target.value))}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="date"
        label="End date"
        type="date"
        value={endDate}
        onChange={(e) => dispatch(setEndDate(e.target.value))}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Typography>
        Once your dates are selected, add them to your list:
      </Typography>
      {
        startDate !== '' && endDate !== '' && (
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap={2}
            className={classes.selectedDates}
          >
            <Typography>
              - From {moment(startDate).format('DD/MM/YYYY')} to {moment(endDate).format('DD/MM/YYYY')}
            </Typography>
            <Button
              onClick={() => dispatch(addVacancy(id))}
              variant="text"
            >
              Add
            </Button>
          </Stack>
        )
      }
      <Stack
        width="100%"
      >
        <Typography
          variant="h6"
        >
          Current availabilities
        </Typography>
        {jsxVacancies}
      </Stack>

    </Stack>

  );
}
