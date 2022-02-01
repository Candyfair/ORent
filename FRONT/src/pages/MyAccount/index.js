// IMPORTS
import { Stack } from '@mui/material/';
import { makeStyles } from '@mui/styles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';



import AccountForm from '../../components/AccountForm';


import HomeComp from '../../components/HomeComp';
import { fetchUserInfos } from '../../redux/actions/userUpdate';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  myAccount: {
    width: '100vw',
  },
}));

// COMPONENT
const MyAccount = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(
    () => {
      dispatch(fetchUserInfos())
    }, []);

  return (
    <Stack
      flexDirection="column"
      spacing={5}
      className={classes.myAccount}
      justifyContent="center"
      alignItems="center"
    >
      <AccountForm />
    </Stack>
  );
};

export default MyAccount;
