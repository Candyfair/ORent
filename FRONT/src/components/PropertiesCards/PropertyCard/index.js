/* eslint-disable linebreak-style */
// === IMPORTS
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import {
  Card, CardMedia, Button, Typography, Stack,
} from '@mui/material/';
import { capitalizeFirstLetter } from '../../../utils/utils';

// === MUI
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
    height: '200px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: '200px',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: theme.spacing(2),
  },
  type: {
    fontSize: '1rem',
  },
  name: {
    fontSize: '1.5rem',
    fontWeight: '700',
  },
  description: {
    flexGrow: 1,
    fontSize: '0.9rem',
    lineHeight: '1.3',
    fontStyle: 'italic',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    maxWidth: '25vw',
    [theme.breakpoints.down('md')]: {
      maxWidth: '80vw',
    },
  },
  price: {
    fontWeight: 'bold',
    fontSize: '0.9rem',

  },
  button: {
    fontSize: '0.7rem',
  },
  host: {
    color: theme.palette.primary.main,
    fontWeight: '700',
  },

}));

// === COMPONENT
const PropertyCard = ({
  image,
  type,
  name,
  description,
  weekprice,
  slug,
  id,
  host,
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
      <Stack
        className={classes.content}
      >
        <Stack
          flexDirection="row"
          gap={1}
        >
          <Typography
            className={classes.type}
            variant="subtitle1"
            component="h5"
          >
            {capitalizeFirstLetter(type)} hosted by
          </Typography>
          <Typography
            className={classes.host}
            variant="subtitle1"
            component="h5"
          >
            {capitalizeFirstLetter(host)}
          </Typography>

        </Stack>

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
          {weekprice}€/week
        </Typography>

        <Button
          className={classes.button}
          size="small"
          color="primary"
          onClick={() => navigate(`/homes/${slug}/${id}`)}
        >
          More details
        </Button>
      </Stack>
    </Card>
  );
};

// === propTypes
PropertyCard.propTypes = {
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  weekprice: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  host: PropTypes.string.isRequired,
};

export default PropertyCard;
