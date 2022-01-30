import {
  Stack, Typography, TextField, Button,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

/* eslint-disable linebreak-style */
const useStyles = makeStyles((theme) => ({
  header: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '60px',
    },
  },
  accountForm: {
    width: '30%',
    margin: '16px auto',
    [theme.breakpoints.down('sm')]: {
      width: '82%',
    },
    [theme.breakpoints.up('md')]: {
      width: '30%',
    },
  },
  buttons: {
    justifyContent: 'space-between',
    width: '30%',
    margin: '36px auto',
    [theme.breakpoints.down('sm')]: {
      width: '82%',
    },
  },
}));

const AccountForm = () => {
  const classes = useStyles();
  return (
    <Stack>
      <Typography
        className={classes.header}
        variant="h4"
        gutterBottom
      >
        My account
      </Typography>
      <form>
        <Stack
          className={classes.accountForm}
          spacing={4}
        >
          <TextField
            required
            id="username"
            label="Username :"
            value="CK_2022"
            focused
          />
          <TextField
            required
            id="firstname"
            label="First name :"
            value="Key"
            focused
          />
          <TextField
            required
            id="lastname"
            label="Last name :"
            value="Cereal"
            focused
          />
          <TextField
            required
            id="email"
            label="Email :"
            type="email"
            value="cereal@key.com"
            focused
          />
          <TextField
            required
            id="password"
            label="Password :"
            type="password"
            value="hahahaha"
            focused
          />
        </Stack>
        <Stack
          direction="row"
          className={classes.buttons}
        >
          <Button variant="text">Delete my account</Button>
          <Button variant="contained">Update my account</Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default AccountForm;
