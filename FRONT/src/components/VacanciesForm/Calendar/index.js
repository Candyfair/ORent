import { useParams } from 'react-router';
// IMPORTS
import { makeStyles } from '@mui/styles';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import {
  TextField, Stack, Typography, Button,
} from '@mui/material/';
import { setStartDate, setEndDate, addVacancy } from '../../../redux/actions/vacancy';

// MUI STYLES
const useStyles = makeStyles((theme) => ({

}));

// COMPONENT
export default function Calendar() {
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { startDate, endDate } = useSelector((state) => state.vacancy);
  const { propertyVacancies } = useSelector((state) => state.propertyCurrent);
  const jsxVacancies = propertyVacancies.map((vacancy) => (
    <Typography>
      - From {moment(vacancy.startdate).format('DD/MM/YYYY')} to {moment(vacancy.enddate).format('DD/MM/YYYY')}
    </Typography>
  ));

  // const firstDate = moment(startDate).format('DD/MM/YYYY');

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
      <Stack>
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
