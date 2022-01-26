// IMPORTS
import { makeStyles } from '@mui/styles';
import { Stack, Typography } from '@mui/material/';

import PropertyFormComp from '../../components/PropertyFormComp';
import VacanciesForm from '../../components/VacanciesForm';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  addProperty: {
    padding: theme.spacing(3),
  },
}));

// COMPONENT
const AddPropertyForm = () => {
  const classes = useStyles();

  return (
    <Stack
      flexDirection="column"
      spacing={5}
      justifyContent="flex-start"
      alignItems="left"
      className={classes.addProperty}
    >
      <Typography
        variant="h4"
        align="left"
      >
        Add a property
      </Typography>

      <PropertyFormComp />
      <VacanciesForm />
    </Stack>
  );
};

export default AddPropertyForm;
