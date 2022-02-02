// === Imports
import { makeStyles } from '@mui/styles';
import { Stack, Card, CardContent } from '@mui/material/';

import Vacancy from './Vacancy';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  vacanciesList: {
    [theme.breakpoints.up('md')]: {
      width: '30%',
    },
    width: '100%',
  },
}));

// COMPONENT
const VacanciesList = () => {
  const classes = useStyles();

  return (
    <Stack
      flexDirection="column"
      className={classes.vacanciesList}
    >
      <Card
        variant="outlined"
      >
        <CardContent>
          <Stack spacing={2}>
            <Vacancy />
            <Vacancy />
            <Vacancy />
            <Vacancy />
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default VacanciesList;
