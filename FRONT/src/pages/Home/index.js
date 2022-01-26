import { makeStyles } from '@mui/styles';
import { Stack, Button, Typography } from '@mui/material/';

import homepageImg from '../../assets/images/homepage.jpg';

// MaterialUI theme import
const useStyles = makeStyles((theme) => ({
  home: {
    display: 'flex',
  },
  button: {
    boxShadow: theme.custom.shadow.primary,
    textDecoration: 'underline',
    '&:hover': {
      backgroundColor: theme.palette.common.white,
    },
  },
  container: {
    position: 'relative',
    textAlign: 'center',
  },
  centeredblock: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: theme.palette.common.white,
  },
  btexplore: {
    padding: theme.spacing(1),
    color: theme.palette.common.white,
    fontSize: '1rem',
    width: '400px',
  },
}));

// Exported component
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
      <Stack
        className={classes.container}
      >
        <img src={homepageImg} alt="Find inspiration for your next vacation" />
        <Stack
          spacing={4}
          className={classes.centeredblock}
        >
          <Typography variant="h3">Find inspiration for your next vacation</Typography>
          <Button
            variant="contained"
            color="secondary"
            className={classes.btexplore}
          >
            Explore
          </Button>

        </Stack>
      </Stack>
    </Stack>
  );
};

export default Home;
