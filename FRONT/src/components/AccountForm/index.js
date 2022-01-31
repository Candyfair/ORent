import {
  Stack, Typography, TextField, Button,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LoopIcon from '@mui/icons-material/Loop';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { fetchUserInfos } from '../../redux/actions/userUpdate';

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

  const handleSubmitUpdateAccountFormm = (e) => {
    e.preventDefault()
  }

  useEffect(
    () => {
      dispatch(fetchUserInfos())
    }, []);
  
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
            label="Username :"
            value="CK_2022"
            fullWidth
          />
          <TextField
            required
            id="firstname"
            label="First name :"
            value="Key"
          />
          <TextField
            required
            id="lastname"
            label="Last name :"
            value="Cereal"
          />
          <TextField
            required
            id="email"
            label="Email :"
            type="email"
            value="cereal@key.com"
          />
          <TextField
            required
            id="password"
            label="Password :"
            type="password"
            value="hahahaha"
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
