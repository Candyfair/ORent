/* eslint-disable linebreak-style */
// IMPORTS
import { makeStyles } from '@mui/styles';
import { Stack, Typography } from '@mui/material/';

// MUI STYLES
const useStyles = makeStyles((theme) => ({

}));

// COMPONENT
const VacanciesForm = () => {
  const classes = useStyles();

  return (
    <Stack spacing={2}>
      <Typography variant="h5">Availabilities</Typography>
      <Typography variant="subtitle1">Pick the first day of the week in the calendar:</Typography>

    </Stack>
  );
};

export default VacanciesForm;
