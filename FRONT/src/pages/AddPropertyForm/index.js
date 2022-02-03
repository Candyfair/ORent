// IMPORTS
import { makeStyles } from '@mui/styles';
import { Stack, Typography } from '@mui/material/';

import PropertyFormComp from '../../components/PropertyFormComp';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  addProperty: {
    padding: theme.spacing(3),
    width: '100%',
  },
}));

// COMPONENT
const AddPropertyForm = () => {
  const classes = useStyles();

  return (
    <Stack
      flexDirection="column"
      spacing={5}
      justifyContent="center"
      alignItems="center"
      className={classes.addProperty}
    >
      <Typography
        variant="h4"
        align="left"
      >
        Add a property
      </Typography>

      <PropertyFormComp />
    </Stack>
  );
};

export default AddPropertyForm;
