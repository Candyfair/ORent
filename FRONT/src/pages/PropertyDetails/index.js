// IMPORTS
import { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Stack, Typography } from '@mui/material/';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import Pictures from '../../components/PropertyDetailsComp/Pictures';
import Description from '../../components/PropertyDetailsComp/Description';
import VacanciesList from '../../components/PropertyDetailsComp/VacanciesList';
import Loader from '../../components/Loader';

import { fetchProperty } from '../../redux/actions/propertiesFetch';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  propertyDetailClass: {
    maxWidth: 1165,
  },
  titlePadding: {
    padding: `${theme.spacing(3)} ${theme.spacing(3)} 0 ${theme.spacing(3)}`,
  },
  textPadding: {
    padding: `0 ${theme.spacing(3)}`,
  },
}));

// COMPONENT
const PropertyDetails = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading } = useSelector((state) => state.displayOptions);
  const { propertyDetails } = useSelector((state) => state.propertyCurrent);

  useEffect(() => {
    dispatch(fetchProperty(id));
  }, []);

  if (loading) return <Loader />;

  if (!propertyDetails) return null;

  return (
    <Stack
      flexDirection="column"
      spacing={5}
      justifyContent="left"
      alignItems="left"
      className={classes.propertyDetailClass}
    >
      <Typography
        variant="h4"
        align="left"
        className={classes.titlePadding}
      >
        {propertyDetails.name}
      </Typography>

      <Stack
        flexDirection="column"
        spacing={5}
      >

        {/* Photos de la propriété */}
        <Pictures images={propertyDetails.images} />

        <Stack
          flexDirection="row"
          justifyContent="space-between"
          className={classes.textPadding}
        >
          <Description
            type={propertyDetails.type}
            city={propertyDetails.city}
            country={propertyDetails.country}
            host={propertyDetails.host}
            capacity={propertyDetails.capacity}
            bedroomscount={propertyDetails.bedroomscount}
            bedscount={propertyDetails.bedscount}
            bathroomscount={propertyDetails.bathroomscount}
            description={propertyDetails.description}
          />
          <VacanciesList />
        </Stack>

      </Stack>
    </Stack>
  );
};

export default PropertyDetails;
