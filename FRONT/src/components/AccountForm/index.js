import {
  Stack, Typography, TextField, Button,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import LoopIcon from '@mui/icons-material/Loop';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from 'react-redux';
import { changePasswordSwitch, changeUpdateUserField } from '../../redux/actions/userUpdate';
import { setModal } from '../../redux/actions/modals';
import { updateAccount, updateAccountWithPassword } from '../../redux/actions/userCurrent';
import { useState } from 'react';

/* eslint-disable linebreak-style */
const useStyles = makeStyles((theme) => ({
  accountUpdateForm: {
    width: '500px',
    [theme.breakpoints.down('md')]: {
      width: '100vw',
      padding: theme.spacing(1)
    }
  },
  title: {
    padding: `${theme.spacing(3)} 0`
  },
  buttons: {
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
    },
  },
  deleteButton: {

  },
  updateButton: {
    color: theme.palette.common.white,
  },
  changePasswordButton: {
    color: theme.palette.text.secondary,
    textTransform: 'none',
  },


}));

const AccountForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { username, firstname, lastname, email, password, newPassword, newPasswordVerification, changePassword } = useSelector((state) => state.userUpdate);

  const handleSubmitUpdateAccountFormm = (e) => {
    e.preventDefault();
    if(changePassword) {
      if(newPassword === newPasswordVerification)
      dispatch(updateAccountWithPassword());
    } else {
      dispatch(updateAccount());
    }
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
          <Button
            onClick={() => dispatch(changePasswordSwitch())}
            className={classes.changePasswordButton}
            size='small'
          >
            I want to modify my password
          </Button>
          {changePassword && (
            <>
            <TextField
              required
              id="new_password"
              label="New Password"
              type="password"
              value={newPassword}
              onChange={(e) => dispatch(changeUpdateUserField(e.target.value, 'newPassword'))}
            />
            <TextField
              required
              id="new_password_verification"
              label="New Password verification"
              type="password"
              value={newPasswordVerification}
              onChange={(e) => dispatch(changeUpdateUserField(e.target.value, 'newPasswordVerification'))}
            />
            </>
          )}

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
              onClick={() => dispatch(setModal(true, 'deleteAccountWarning'))}
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
