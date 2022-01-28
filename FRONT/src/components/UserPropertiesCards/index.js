/* eslint-disable linebreak-style */
// === IMPORTSimport
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import {
  CssBaseline,
  Stack,
  Grid,
} from '@mui/material';
import UserPropertyCard from './UserPropertyCard';

// === MUI
const useStyles = makeStyles(() => ({
  cardGrid: {
    width: '100vw',
    height: '100%',
    // justifyContent: 'center',
  },
}));

// === COMPONENT
const UserPropertiesCards = ({ cards }) => {
  const classes = useStyles();
  return (
    <Stack>
      <CssBaseline />
      <Grid container className={classes.cardGrid} spacing={4}>
        {cards.map((card) => (
          <Grid item key={card.id} xs={12} sm={3}>
            <UserPropertyCard
              name={card.name}
              image={card.images[0]}
              type={card.type}
              // slug={card.slug}
              // id={card.id}
            />
          </Grid>
        ))}
      </Grid>
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
    weekPrice: PropTypes.number,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    images: PropTypes.array,
    user_id: PropTypes.number,
  })).isRequired,
};

export default UserPropertiesCards;
