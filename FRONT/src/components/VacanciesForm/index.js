/* eslint-disable linebreak-style */
// IMPORTS
import { makeStyles } from '@mui/styles';
import { Stack, Typography } from '@mui/material/';
import Calendar from 'src/components/VacanciesForm/Calendar';

// MUI STYLES
const useStyles = makeStyles((theme) => ({

}));

// COMPONENT
const VacanciesForm = () => {
  const classes = useStyles();

  return (
    <Stack spacing={2}>
      <Typography variant="h5">Availabilities</Typography>
      <Typography variant="subtitle1">Select the dates in the calendar:</Typography>
      <Calendar />
    </Stack>
  );
};

export default VacanciesForm;
