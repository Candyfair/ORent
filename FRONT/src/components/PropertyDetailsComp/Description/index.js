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
  type,
  city,
  country,
  host,
  capacity,
  bedroomscount,
  bedscount,
  bathroomscount,
  description,
}) => {
  const classes = useStyles();

  return (
    <Stack
      spacing={2}
      className={classes.description}
    >
      <Typography variant="h5">
        {type} - {city}, {country}  - Host : {host}
      </Typography>
      <Typography variant="subtitle1">
        {capacity} guests - {bedroomscount} bedrooms - {bedscount} beds - {bathroomscount} bathrooms
      </Typography>

      <Divider />

      <Typography variant="body1">
        {description}
      </Typography>
    </Stack>
  );
};

// PROPTYPES
Description.propTypes = {
  type: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
  capacity: PropTypes.number.isRequired,
  bedroomscount: PropTypes.number.isRequired,
  bedscount: PropTypes.number.isRequired,
  bathroomscount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default Description;
