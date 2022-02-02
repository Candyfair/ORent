/* eslint-disable linebreak-style */
// === IMPORTSimport
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import {
  Box,
  Stack,
} from '@mui/material';
import UserPropertyCard from './UserPropertyCard';

// === MUI
const useStyles = makeStyles((theme) => ({
  userPropertiesCards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: `${theme.spacing(2)} 0`,
    width: '100%',
    height: '100%',
  },
}));

// === COMPONENT
const UserPropertiesCards = ({ cards }) => {
  const classes = useStyles();
  return (
    <Stack
      className={classes.userPropertiesCards}
      gap={8}
    >
      {cards.map((card) => (
        <Box key={card.id}>
          <UserPropertyCard
            name={card.name}
            image={card.images[0]}
            type={card.type}
            slug={card.slug}
            id={card.id}
          />
        </Box>
      ))}
      <Box>
        <UserPropertyCard
          name=""
          image=""
          type=""
          slug=""
          id={0}
        />
      </Box>
    </Stack>
  );
};

// === propTypes
UserPropertiesCards.propTypes = {
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
  })).isRequired,
};

export default UserPropertiesCards;
