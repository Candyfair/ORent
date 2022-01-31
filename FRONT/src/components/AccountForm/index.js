import {
  Stack, Typography, TextField, Button,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import LoopIcon from '@mui/icons-material/Loop';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from 'react-redux';
import { changeUpdateUserField } from '../../redux/actions/userUpdate';

/* eslint-disable linebreak-style */
const useStyles = makeStyles((theme) => ({
  accountUpdateForm: {
    width: '500px',
  },
  title: {
    padding: `${theme.spacing(3)} 0`
  },
  button: {

  },
  deleteButton: {

  },
  updateButton: {
    color: theme.palette.common.white,
  }

}));

const AccountForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { username, firstname, lastname, email, password, newPassword, newPasswordVerification } = useSelector((state) => state.userUpdate);

  const handleSubmitUpdateAccountFormm = (e) => {
    e.preventDefault()
  }



 
  return (
    <Stack
      className={classes.accountUpdateForm}
    >
      <Typography
        className={classes.title}
        variant="h4"
        textAlign='center'
      >
        My account
      </Typography>
      <form onSubmit={handleSubmitUpdateAccountFormm}>
        <Stack
          className={classes.accountForm}
          spacing={2}
        >
          <TextField
            required
            id="username"
            label="Username"
            value={username}
            onChange={(e) => dispatch(changeUpdateUserField(e.target.value, 'username'))}
          />
          <TextField
            required
            id="firstname"
            label="First name"
            value={firstname}
            onChange={(e) => dispatch(changeUpdateUserField(e.target.value, 'firstname'))}
          />
          <TextField
            required
            id="lastname"
            label="Last name"
            value={lastname}
            onChange={(e) => dispatch(changeUpdateUserField(e.target.value, 'lastname'))}
          />
          <TextField
            required
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => dispatch(changeUpdateUserField(e.target.value, 'email'))}
          />
          <TextField
            required
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => dispatch(changeUpdateUserField(e.target.value, 'password'))}
          />
          <Stack
            flexDirection="row"
            justifyContent='space-between'
            className={classes.buttons}
            gap={2}
          >
            <Button 
              variant="text"
              className={classes.deleteButton}
              disableElevation
              fullWidth
              startIcon={<DeleteForeverIcon />}
            >
              Delete my account
            </Button>
            <Button 
              variant="contained"
              className={classes.updateButton}
              disableElevation
              fullWidth
              type='submit'
              startIcon={<LoopIcon />}
            >
              Update my account
            </Button>
          </Stack>
        </Stack>

      </form>
    </Stack>
  );
};



export default AccountForm;
