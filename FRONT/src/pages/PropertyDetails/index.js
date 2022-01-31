// IMPORTS
import { makeStyles } from '@mui/styles';
import { Stack, Typography } from '@mui/material/';

import PropertyDetailsComp from '../../components/PropertyDetailsComp';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  propertyDetail: {
    padding: theme.spacing(3),
    maxWidth: 1165,
  },
}));

// COMPONENT
const PropertyDetails = () => {
  const classes = useStyles();

  return (
    <Stack
      flexDirection="column"
      spacing={5}
      justifyContent="left"
      alignItems="left"
      className={classes.propertyDetail}
    >
      <Typography
        variant="h4"
        align="left"
      >
        [Nom de la propriété]
      </Typography>

      <PropertyDetailsComp />
    </Stack>
  );
};

export default PropertyDetails;
