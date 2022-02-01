/* eslint-disable linebreak-style */
// IMPORTS
import PropTypes from 'prop-types';

import { makeStyles } from '@mui/styles';
import { Stack, Typography, Divider } from '@mui/material/';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  description: {
    width: '70%',
    paddingRight: theme.spacing(5),
  },
}));

// COMPONENT
const Description = ({
  details,
}) => {
  const classes = useStyles();

  return (
    <Stack
      spacing={2}
      className={classes.description}
    >
      <Typography variant="h5">
        {details.type} - {details.city}, {details.country}  - Host : {details.host}
      </Typography>
      <Typography variant="subtitle1">
        {details.capacity} guests - {details.bedroomscount} bedrooms - {details.bedscount} beds - {details.bathroomscount} bathrooms
      </Typography>

      <Divider />

      <Typography variant="body1">
        {details.description}
      </Typography>
    </Stack>
  );
};

Description.propTypes = {
  // validation des éléments du tableau + forme des éléments du tableau
  details: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
    host: PropTypes.string,
    capacity: PropTypes.number,
    bedroomscount: PropTypes.number,
    bedscount: PropTypes.number,
    bathroomscount: PropTypes.number,
    description: PropTypes.string,
  })).isRequired,
};

export default Description;
