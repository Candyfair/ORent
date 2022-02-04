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
import { fetchPropertyVacancies } from '../../redux/actions/vacancy';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  propertyDetailClass: {
    maxWidth: 1165,
    // width: '80%',
    margin: `${theme.spacing(5)} auto`,
  },
  content: {
    padding: `0 ${theme.spacing(3)}`,
    width: '100%',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  propertyTitle: {
    textAlign: 'left',
    width: '100%',
    marginLeft: theme.spacing(5),
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
    dispatch(fetchPropertyVacancies(id));
  }, []);

  if (loading) return <Loader />;

  if (!propertyDetails) return null;

  return (
    // Main container (stack)
    <Stack
      flexDirection="column"
      spacing={5}
      justifyContent="center"
      alignItems="center"
      className={classes.propertyDetailClass}
    >
      {/* Property name */}
      <Typography
        variant="h4"
        className={classes.propertyTitle}
      >
        {propertyDetails.name}
      </Typography>

      {/* Photos and Description components (stack) */}
      <Stack
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        spacing={5}
      >

        {/* Photos of the property */}
        <Pictures images={propertyDetails.images} />

        <Stack
          flexDirection="row"
          justifyContent="space-between"
          spacing={4}
          className={classes.content}
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
            weekprice={propertyDetails.weekprice}
          />

          {/* Vacancies component */}
          <VacanciesList />
        </Stack>

      </Stack>
    </Stack>
  );
};

export default PropertyDetails;
