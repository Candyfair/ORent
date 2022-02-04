/* eslint-disable linebreak-style */
// IMPORTS
import PropTypes from 'prop-types';

import { makeStyles } from '@mui/styles';
import {
  Stack, Typography, Divider, Tooltip,
} from '@mui/material/';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import NightShelterIcon from '@mui/icons-material/NightShelter';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  description: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '70%',
      paddingRight: theme.spacing(5),
    },
  },
  options: {
    fontSize: '1rem',
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
  weekprice,
}) => {
  const classes = useStyles();

  return (
    <Stack
      spacing={2}
      className={classes.description}
    >
      <Typography variant="h5">
        {type} in {city}, {country}
      </Typography>
      <Typography variant="body">
        Hosted by {host} - {weekprice}€ per week
      </Typography>

      {/* Options icons */}
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-start"
        gap={4}
        className={classes.options}
      >
        <Stack flexDirection="row" alignItems="center">
          <Tooltip title="Capacity">
            <PeopleRoundedIcon />
          </Tooltip> {capacity}
        </Stack>
        <Stack flexDirection="row" alignItems="center">
          <Tooltip title="Number of bedrooms">
            <NightShelterIcon />
          </Tooltip> {bedroomscount}
        </Stack>
        <Stack flexDirection="row" alignItems="center">
          <Tooltip title="Number of beds">
            <SingleBedIcon />
          </Tooltip> {bedscount}
        </Stack>
        <Stack flexDirection="row" alignItems="center">
          <Tooltip title="Bathrooms">
            <BathtubOutlinedIcon />
          </Tooltip> {bathroomscount}
        </Stack>

      </Stack>

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
  weekprice: PropTypes.number.isRequired,
};

export default Description;
