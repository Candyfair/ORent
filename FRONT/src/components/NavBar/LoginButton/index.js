/* eslint-disable linebreak-style */
// MaterialUI import
import { Stack, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setModal } from '../../../redux/actions/modals';

const LoginButton = () => {
  const dispatch = useDispatch();

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
