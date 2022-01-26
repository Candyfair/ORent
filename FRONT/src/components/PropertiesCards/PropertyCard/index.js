/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';

// === Material UI compoments imports
import { makeStyles } from '@mui/styles';

import {
  Card, CardMedia, CardContent, Button, Typography,
} from '@mui/material/';

import { useNavigate } from 'react-router';

// === Styles
const useStyles = makeStyles((theme) => ({
  propertyCard: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  image: {
    width: '260px',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: '350px',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  type: {
    fontSize: '1rem',
  },
  name: {
    fontSize: '1.5rem',
    fontWeight: '700',
    margin: '8px 0',
  },
  description: {
    flexGrow: 1,
    fontSize: '0.9rem',
    lineHeight: '1.3',
    fontStyle: 'italic',
  },
  price: {
    fontWeight: 'bold',
    fontSize: '0.9rem',

  },
  button: {
    fontSize: '0.7rem',
  },

}));

// === Code
const PropertyCard = ({
  image,
  type,
  name,
  description,
  weekPrice,
  slug,
  id,
}) => {
  const classes = useStyles();

  const navigate = useNavigate();

  return (
    <Card
      className={classes.propertyCard}
    >
      {/* The property image */}
      <CardMedia
        className={classes.image}
        component="img"
        sx={{ width: '25%' }}
        image={image}
        alt={name}
      />
      <CardContent
        className={classes.content}
      >
        <Typography
          className={classes.type}
          variant="subtitle1"
          component="h5"
        >
          {type}
        </Typography>

        <Typography
          className={classes.name}
          component="h3"
          variant="h5"
        >
          {name}
        </Typography>

        <Typography
          className={classes.description}
          variant="subtitle1"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>

        <Typography
          className={classes.price}
          variant="subtitle1"
          color="text.secondary"
          component="aside"
        >
          {weekPrice}€/week
        </Typography>

        <Button
          className={classes.button}
          size="small"
          color="primary"
          onClick={() => navigate(`/homes/${slug}/${id}`)}
        >
          More details
        </Button>
      </CardContent>
    </Card>
  );
};

// === propTypes
PropertyCard.propTypes = {
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  weekPrice: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default PropertyCard;
