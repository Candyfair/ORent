/* eslint-disable linebreak-style */
// === IMPORTS
import PropTypes from 'prop-types';

import { Stack, Box } from '@mui/material/';
import { makeStyles } from '@mui/styles';

import PropertyCard from './PropertyCard';

// === MUI
const useStyles = makeStyles((theme) => ({
  propertiesCards: {
    width: '100%',
  },
  box: {
    boxShadow: theme.custom.shadow.primary,
    flexGrow: 4,
  },
}));

// === COMPONENT
const PropertiesCards = ({ cards }) => {
  const classes = useStyles();

  return (
  // <PropertyCard />
    <Stack
      className={classes.propertiesCards}
      gap={2}
    >
      {cards.map((card) => (
        <Box key={card.id} className={classes.box}>
          <PropertyCard
            name={card.name}
            image={card.images[0]}
            description={card.description}
            weekprice={card.weekprice}
            type={card.type}
            slug={card.slug}
            id={card.id}
            host={card.host}
          />
        </Box>
      ))}
    </Stack>
  );
};

// === propTypes
PropertiesCards.propTypes = {
  // validation des éléments du tableau + forme des éléments du tableau
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slug: PropTypes.string,
    description: PropTypes.string,
    capacity: PropTypes.number,
    bedroomsCount: PropTypes.number,
    bedsCount: PropTypes.number,
    bathrooms_count: PropTypes.number,
    type: PropTypes.string,
    streetNumber: PropTypes.number,
    streetName: PropTypes.string,
    zipCode: PropTypes.number,
    city: PropTypes.string,
    country: PropTypes.string,
    weekprice: PropTypes.number,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    images: PropTypes.array,
    user_id: PropTypes.number,
    host: PropTypes.string,
  })).isRequired,
};

export default PropertiesCards;
