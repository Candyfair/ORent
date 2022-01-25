/* eslint-disable linebreak-style */
// IMPORTS
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@mui/styles';
import {
  Stack, Typography, TextField, Button, FormControl,
  InputLabel, OutlinedInput, InputAdornment, IconButton,
} from '@mui/material/';
import { Visibility, VisibilityOff } from '@mui/icons-material';

// import { useHistory } from 'react-router';
import { setModal } from '../../../../redux/actions/modals';
import {
  changeNewUserField, passwordMatch, register, verifyRegisterFields,
} from '../../../../redux/actions/userCreate';
import { showPassword } from '../../../../redux/actions/displayOptions';

// MUI STYLES
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
}));

// COMPONENT
const RegisterForm = () => {
  // const history = useHistory();
  const dispatch = useDispatch();

  const classes = useStyles();

  const { showPasswordStatus } = useSelector((state) => state.displayOptions);
  const {
    firstname, lastname, username, email, password, passwordVerification,
    passwordMatchValue, usernameAvailability, emailAvailability,
  } = useSelector((state) => state.userNew);
  const { element } = useSelector((state) => state.modals);

  const handleSignUpFormSubmit = (event) => {
    event.preventDefault();
    if (password === passwordVerification) {
      dispatch(register());
      dispatch(passwordMatch(false));
      // history.push('/');
    }
    else {
      dispatch(passwordMatch(true));
    }
  };

  // Rajouter dans le state
  const handleChangeFirstname = (e) => {
    dispatch(verifyRegisterFields(e.target.value, 'firstname'));
    dispatch(changeNewUserField(e.target.value, 'firstname'));
  };

  // Rajouter dans le state
  const handleChangeLastname = (e) => {
    dispatch(verifyRegisterFields(e.target.value, 'lastname'));
    dispatch(changeNewUserField(e.target.value, 'lastname'));
  };

  const handleChangeUsername = (e) => {
    dispatch(verifyRegisterFields(e.target.value, 'username'));
    dispatch(changeNewUserField(e.target.value, 'username'));
  };

  const handleChangeEmail = (e) => {
    dispatch(verifyRegisterFields(e.target.value, 'email'));
    dispatch(changeNewUserField(e.target.value, 'email'));
  };

  let disabledRegister = false;
  if (usernameAvailability || emailAvailability) {
    disabledRegister = true;
  }

  if (element !== 'register') return null;

  return (
    <Stack
      className={classes.loginForm}
      flexDirection="column"
      gap={2}
    >
      <Typography
        align="center"
        variant="h6"
        className={classes.title}
      >
        Register
      </Typography>
      <form autoComplete="off" className={classes.form} onSubmit={handleSignUpFormSubmit}>
        <TextField
          required
          id="firstname_register_form_input"
          label="First name"
          type="text"
          value={firstname}
          variant="outlined"
          onChange={handleChangeFirstname}
        />
        <TextField
          required
          id="lastname_register_form_input"
          label="Last name"
          type="text"
          value={lastname}
          variant="outlined"
          onChange={handleChangeLastname}
        />
        <TextField
          required
          id="username_register_form_input"
          label="Username"
          type="text"
          value={username}
          variant="outlined"
          error={usernameAvailability}
          helperText={usernameAvailability ? 'This username already exists.' : ''}
          onChange={handleChangeUsername}
        />
        <TextField
          required
          id="email_register_form_input"
          label="Email"
          type="email"
          value={email}
          variant="outlined"
          error={emailAvailability}
          helperText={emailAvailability ? 'This email is already registered at ORent' : ''}
          onChange={handleChangeEmail}
        />
        <FormControl variant="outlined">
          <InputLabel htmlFor="password_register_form_input">Password *</InputLabel>
          <OutlinedInput
            required
            id="password_register_form_input"
            type={showPasswordStatus ? 'text' : 'password'}
            value={password}
            onChange={(e) => dispatch(changeNewUserField(e.target.value, 'password'))}
            endAdornment={(
              <InputAdornment position="end">
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
        </FormControl>
        <TextField
          required
          id="passwordVerification_register_form_input"
          label="Password verification"
          type="password"
          value={passwordVerification}
          variant="outlined"
          error={passwordMatchValue}
          helperText={passwordMatchValue ? 'The password doesn\'t match.' : ''}
          onChange={(e) => dispatch(changeNewUserField(e.target.value, 'passwordVerification'))}
        />
        <Button
          className={classes.button}
          variant="contained"
          disableElevation
          size="large"
          type="submit"
          disabled={disabledRegister}
        >
          Register
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
            I already have an account!
          </Typography>
          <Button
            className={classes.registerButton}
            size="small"
            onClick={() => dispatch(setModal(true, 'login'))}
          >
            Login
          </Button>
        </Stack>
      </Stack>

    </Stack>
  );
};

export default RegisterForm;
