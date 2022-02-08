/* eslint-disable linebreak-style */
// === IMPORTSimport
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import {
  Grid,
} from '@mui/material';
import UserPropertyCard from './UserPropertyCard';
import AddPropertyButton from './AddPropertyButton';

// === MUI
const useStyles = makeStyles((theme) => ({
  userPropertiesCards: {
    padding: `0 0 ${theme.spacing(2)} ${theme.spacing(2)}`,
    [theme.breakpoints.down('md')]: {
      padding: `0 0 ${theme.spacing(2)} 0`,
    },
  },
}));

// === COMPONENT
const UserPropertiesCards = ({ cards }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={2}
      className={classes.userPropertiesCards}
    >
      {cards.map((card) => (
        <Grid
          item
          key={card.id}
          xs={12}
          md={4}
        >
          <UserPropertyCard
            name={card.name}
            image={card.images[card.images.length - 1]}
            type={card.type}
            slug={card.slug}
            id={card.id}
          />
        </Grid>
      ))}
      <Grid item xs={12} md={4}>
        <AddPropertyButton />
      </Grid>
    </Grid>

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
