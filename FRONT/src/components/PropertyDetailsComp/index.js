/* eslint-disable linebreak-style */
// === Imports
import { makeStyles } from '@mui/styles';
import { Stack } from '@mui/material/';

import Pictures from './Pictures';
import Description from './Description';
import VacanciesList from './VacanciesList';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  propertyDescription: {
    // maxWidth: 1116,
  },
}));

// COMPONENT
const PropertyDetailsComp = () => {
  const classes = useStyles();

  return (
    <Stack
      flexDirection="column"
      spacing={5}
    >

      {/* Photos de la propriété */}
      <Pictures />

      <Stack
        flexDirection="row"
        justifyContent="space-between"
        className={classes.propertyDescription}
      >
        <Description />
        <VacanciesList />
      </Stack>

    </Stack>
  );
};

export default PropertyDetailsComp;
