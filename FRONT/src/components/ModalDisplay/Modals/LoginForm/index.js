/* eslint-disable linebreak-style */
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { showPassword } from '../../../../redux/actions/displayOptions';
import { setModal } from '../../../../redux/actions/modals';
import { changeCurrentUserField, login } from '../../../../redux/actions/userCurrent';

const useStyles = makeStyles((theme) => ({
  loginForm: {
    width: '325px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: '100%',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),

    textTransform: 'none',
  },
  registerButton: {
    textTransform: 'none',
  },
  forgotButton: {
    textTransform: 'none',
  },
  responsiveSpace: {
    [theme.breakpoints.down('md')]: {
      flexGrow: 1,
    },
  },

}));

const LoginForm = () => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const { element } = useSelector((state) => state.modals);
  const { email, password } = useSelector((state) => state.userCurrent);
  const { loginEmailError, loginPasswordError } = useSelector((state) => state.formErrors);
  const { showPasswordStatus } = useSelector((state) => state.displayOptions);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login());
  };

  if (element !== 'login') return null;

  return (
    <Stack
      className={classes.loginForm}
      flexDirection="column"
      gap={2}
    >
      <div className={classes.responsiveSpace} />
      <Typography
        align="center"
        variant="h6"
        className={classes.title}
      >
        Login
      </Typography>
      <form
        autoComplete="off"
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <TextField
          required
          id="outlined-required"
          label="Email"
          type="email"
          value={email}
          variant="outlined"
          error={loginEmailError}
          helperText={loginEmailError ? 'No account exists with this email address.' : ''}
          onChange={(e) => dispatch(changeCurrentUserField(e.target.value, 'email'))}
        />
        <FormControl
          variant="outlined"
        >
          <InputLabel
            htmlFor="outlined-adornment-password"
            error={loginPasswordError}
          >
            Password *
          </InputLabel>
          <OutlinedInput
            required
            id="outlined-adornment-password"
            type={showPasswordStatus ? 'text' : 'password'}
            value={password}
            error={loginPasswordError}
            onChange={(e) => dispatch(changeCurrentUserField(e.target.value, 'password'))}
            endAdornment={(
              <InputAdornment
                position="end"
              >
                { showPasswordStatus ? (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => dispatch(showPassword(false))}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                  >
                    <VisibilityOff />
                  </IconButton>
                )
                  : (
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => dispatch(showPassword(true))}
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      <Visibility />
                    </IconButton>
                  )}

              </InputAdornment>
                      )}
            label="Password *"
          />
          <FormHelperText
            id="outlined-adornment-password-helper-text"
            error={loginPasswordError}
          >
            {loginPasswordError ? 'Password is incorrect' : ''}
          </FormHelperText>
        </FormControl>
        <Button
          className={classes.button}
          variant="contained"
          disableElevation
          size="large"
          type="submit"
        >
          Login
        </Button>
      </form>
      <Stack>
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          gap={1}
        >
          <Typography variant="body2">
            You have no account ?
          </Typography>
          <Button
            className={classes.registerButton}
            size="small"
            onClick={() => dispatch(setModal(true, 'register'))}
          >
            Register
          </Button>
        </Stack>
        <Button
          className={classes.forgotButton}
          size="small"
        >
          I forgot my password
        </Button>
      </Stack>

    </Stack>
  );
};

export default LoginForm;
