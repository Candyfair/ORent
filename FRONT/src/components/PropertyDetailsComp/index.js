/* eslint-disable linebreak-style */
// === Imports
import { Stack } from '@mui/material/';

import Pictures from './Pictures';
import Description from './Description';
import VacanciesList from './VacanciesList';

// COMPONENT
const PropertyDetailsComp = ({ details }) => (
  <Stack
    flexDirection="column"
    spacing={5}
  >

    {/* Photos de la propriété */}
    <Pictures />

    <Stack
      flexDirection="row"
      justifyContent="space-between"
    >
      <Description
        details={details}
      />
      <VacanciesList details={details} />
    </Stack>

  </Stack>
);

export default PropertyDetailsComp;
