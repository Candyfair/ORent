/* eslint-disable linebreak-style */
// MaterialUI import
import { Stack, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../../redux/actions/modals';

const LoginButton = () => {
  const dispatch = useDispatch();

  const { isLogged } = useSelector((state) => state.userCurrent);

  if (isLogged) return null;

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
    >
      <Button
        variant="contained"
        color="secondary"
        disableElevation
        onClick={() => dispatch(setModal(true, 'login'))}
      >
        Login
      </Button>

    </Stack>

  );
};

export default LoginButton;
