// === IMPORTS
import { Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';

// === MUI
const useStyles = makeStyles((theme) => ({
  genericComponent: {

  },

}));

// === COMPONENT
const GenericComponent = () => {
  const classes = useStyles();

  return (
    <Stack
      className={classes.genericComponent}
      justifyContent="center"
      alignItems="center"
    >
      Generic Component
    </Stack>
  );
};

export default GenericComponent;
