// IMPORTS
import { makeStyles } from '@mui/styles';
import { Stack, Typography } from '@mui/material/';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useEffect } from 'react';

import PropertyDetailsComp from '../../components/PropertyDetailsComp';
import { fetchProperty } from '../../redux/actions/propertiesFetch';
import Loader from '../../components/Loader';

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
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);

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
      className={classes.propertyDetail}
    >
      <Typography
        variant="h4"
        align="left"
      >
        {propertyDetails.name}
      </Typography>

      <PropertyDetailsComp propertyDetails={PropertyDetails} />
    </Stack>
  );
};

export default PropertyDetails;
