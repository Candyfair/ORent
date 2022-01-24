/* eslint-disable linebreak-style */
// MaterialUI import
import { Stack, Button } from '@mui/material';

const LoginButton = () => (
  <Stack
    alignItems="center"
    justifyContent="center"
  >
    <Button
      variant="contained"
      color="secondary"
      disableElevation
    >
      Login
    </Button>
  </Stack>
);

export default LoginButton;
