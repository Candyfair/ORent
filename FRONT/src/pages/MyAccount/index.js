// IMPORTS
import { Stack } from '@mui/material/';
import { makeStyles } from '@mui/styles';

import AccountForm from '../../components/AccountForm';


import HomeComp from '../../components/HomeComp';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  myAccount: {
    width: '100vw',
  },
}));

// COMPONENT
const MyAccount = () => {
  const classes = useStyles();

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
