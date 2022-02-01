// IMPORTS
import { makeStyles } from '@mui/styles';
import { Stack, Typography } from '@mui/material/';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useEffect } from 'react';

import Pictures from '../../components/PropertyDetailsComp/Pictures';
import Description from '../../components/PropertyDetailsComp/Description';
import VacanciesList from '../../components/PropertyDetailsComp/VacanciesList';
import Loader from '../../components/Loader';

import { fetchProperty } from '../../redux/actions/propertiesFetch';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  propertyDetailClass: {
    padding: theme.spacing(3),
    maxWidth: 1165,
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
      >
        {propertyDetails.name}
      </Typography>

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
          <VacanciesList vacancies={propertyDetails} />
        </Stack>

      </Stack>
    </Stack>
  );
};

export default PropertyDetails;
