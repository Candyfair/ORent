/* eslint-disable linebreak-style */
// IMPORTS
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@mui/styles';
import {
  Stack, Typography, TextField, Button,
} from '@mui/material/';

// import { useHistory } from 'react-router';
import { setModal } from '../../../../redux/actions/modals';
import {
  changeNewUserField, register,
} from '../../../../redux/actions/userCreate';

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

  const {
    firstname, lastname, username, email, password, passwordVerification,
  } = useSelector((state) => state.userCreate);

  const { element } = useSelector((state) => state.modals);

  const handleSignUpFormSubmit = (event) => {
    event.preventDefault();
    if (password === passwordVerification) {
      dispatch(register());
      // history.push('/');
    }
  };

  const handleChangeFirstname = (e) => {
    dispatch(changeNewUserField(e.target.value, 'firstname'));
  };

  const handleChangeLastname = (e) => {
    dispatch(changeNewUserField(e.target.value, 'lastname'));
  };

  const handleChangeUsername = (e) => {
    dispatch(changeNewUserField(e.target.value, 'username'));
  };

  const handleChangeEmail = (e) => {
    dispatch(changeNewUserField(e.target.value, 'email'));
  };

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
          onChange={handleChangeUsername}
        />
        <TextField
          required
          id="email_register_form_input"
          label="Email"
          type="email"
          value={email}
          variant="outlined"
          onChange={handleChangeEmail}
        />
        <TextField
          required
          id="password_register_form_input"
          label="Password"
          type="password"
          value={password}
          variant="outlined"
          onChange={(e) => dispatch(changeNewUserField(e.target.value, 'password'))}
        />
        <TextField
          required
          id="passwordVerification_register_form_input"
          label="Password verification"
          type="password"
          value={passwordVerification}
          variant="outlined"
          onChange={(e) => dispatch(changeNewUserField(e.target.value, 'passwordVerification'))}
        />
        <Button
          className={classes.button}
          variant="contained"
          disableElevation
          size="large"
          type="submit"
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
