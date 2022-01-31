import { Stack, CircularProgress } from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  loader: {
    width: '100%',
    height: '100%',
    padding: theme.spacing(3),
  },
}));

const Loader = () => {
  const classes = useStyles();

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      className={classes.loader}
    >
      <CircularProgress />
    </Stack>
  );
};

export default Loader;
