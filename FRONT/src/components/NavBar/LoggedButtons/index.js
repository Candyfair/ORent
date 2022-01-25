/* eslint-disable linebreak-style */
// MaterialUI import
import { Stack, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/actions/userCurrent';

const LoggedButtons = () => {
  const dispatch = useDispatch();

  const { isLogged } = useSelector((state) => state.userCurrent);

  if (!isLogged) return null;

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
    >

      <Button
        variant="outlined"
        color="secondary"
        disableElevation
        onClick={() => dispatch(logout())}
      >
        Log out
      </Button>
    </Stack>

  );
};

export default LoggedButtons;
