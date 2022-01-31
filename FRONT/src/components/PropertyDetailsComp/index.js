/* eslint-disable linebreak-style */
// === Imports
import { makeStyles } from '@mui/styles';
import { Stack, Typography } from '@mui/material/';

import Pictures from './Pictures';
import Description from './Description';
import VacanciesList from './VacanciesList';

// MUI STYLES
const useStyles = makeStyles((theme) => ({

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
        className="PropertyDetailsContainer"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Description />
        <VacanciesList />
      </Stack>

    </Stack>
  );
};

export default PropertyDetailsComp;
