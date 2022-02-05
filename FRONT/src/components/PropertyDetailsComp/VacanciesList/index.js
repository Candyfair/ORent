// === Imports
import { makeStyles } from '@mui/styles';
import {
  Stack, Card, CardContent, Typography, Button,
} from '@mui/material/';

import { useSelector, useDispatch } from 'react-redux';
import { setModal } from '../../../redux/actions/modals';
import Vacancy from './Vacancy';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  vacanciesList: {
    [theme.breakpoints.up('md')]: {
      width: '40%',
    },
    width: '100%',
  },
}));

// COMPONENT
const VacanciesList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { propertyVacancies } = useSelector((state) => state.propertyCurrent);
  const { isLogged } = useSelector((state) => state.userCurrent);

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
            {isLogged
              && propertyVacancies.map((vacancy) => (
                <Vacancy
                  key={vacancy.id}
                  startDate={vacancy.startdate}
                  endDate={vacancy.enddate}
                />
              ))}
          </Stack>
          {!isLogged
            && (
            <Stack spacing={2}>
              <Typography>
                Please login or register to check availabilities
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                disableElevation
                onClick={() => dispatch(setModal(true, 'login'))}
              >
                Login
              </Button>
            </Stack>
            )}
        </CardContent>
      </Card>
    </Stack>
  );
};

export default VacanciesList;
