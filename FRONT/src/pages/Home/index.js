// IMPORTS
import { Stack } from '@mui/material/';
import { makeStyles } from '@mui/styles';

import HomeComp from '../../components/HomeComp';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  home: {
    display: 'flex',
  },
}));

// COMPONENT
const Home = () => {
  const classes = useStyles();

  return (
    <Stack
      flexDirection="column"
      spacing={5}
      className={classes.home}
      justifyContent="flex-start"
      alignItems="center"
    >
      <HomeComp />
    </Stack>
  );
};

export default Home;
