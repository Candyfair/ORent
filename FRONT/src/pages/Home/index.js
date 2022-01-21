import { makeStyles } from '@mui/styles';
import { Stack, Button, Typography } from '@mui/material/';

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
      <Typography
        variant="h3"
      >
        PAGE D'ACCUEIL
      </Typography>
      <Stack
        flexDirection="column"
        justifyContent="space-between"
      >
        <Button
          variant="contained"
          className={classes.button}
        >
          Contained
        </Button>
        <Button
          variant="contained"
          className={classes.button}
        >
          Contained
        </Button>
      </Stack>
    </Stack>
  );
};

export default Home;
