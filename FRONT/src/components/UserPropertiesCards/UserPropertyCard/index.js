/* eslint-disable linebreak-style */
// === IMPORTS
// import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography,
} from '@mui/material/';

// === MUI
const useStyles = makeStyles((theme) => ({
  buttons: {

  },
  card: {
    width: '300px',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: '325px',
    },

  },
  cardMedia: {
    paddingTop: '56.25%', // correspond to 16:9
  },
  cardContent: {

  },
  name: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  type: {
    fontSize: '0.95rem',
  },
}));

// === COMPONENT
const UserPropertyCard = ({
  image,
  type,
  name,
  // slug,
  // id,
}) => {
  const classes = useStyles();
  // const navigate = useNavigate();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={image}
        alt={name}
      />
      <CardContent className={classes.cardContent}>
        <Typography
          className={classes.type}
        >
          {type}
        </Typography>
        <Typography
          className={classes.name}
        >
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" className={classes.buttons}>View</Button>
        <Button size="small" color="primary" className={classes.buttons}>Edit</Button>
      </CardActions>
    </Card>
  );
};

// === propTypes
UserPropertyCard.propTypes = {
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // slug: PropTypes.string.isRequired,
  // id: PropTypes.number.isRequired,
};

export default UserPropertyCard;
