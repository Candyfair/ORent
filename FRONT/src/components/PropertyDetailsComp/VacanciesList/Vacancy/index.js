// IMPORTS
import { makeStyles } from '@mui/styles';
import {
  Stack, Button, Card,
} from '@mui/material/';

import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../../../redux/actions/modals';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  period: {
    paddingLeft: theme.spacing(2),
  },
}));

// COMPONENT
const Vacancy = () => {
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
          From 20/01 to 27/01
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

export default Vacancy;
