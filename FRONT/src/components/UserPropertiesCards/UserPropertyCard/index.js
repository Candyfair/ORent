/* eslint-disable linebreak-style */
// === IMPORTS
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import {
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
  Stack,
} from '@mui/material/';

// === Styles
const useStyles = makeStyles((theme) => ({
  userPropertyCard: {
    display: 'flex',
    flexDirection: 'column',
    width: '280px',
    height: '280px',
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      height: '300px',
    },
  },
  cardMedia: {
    width: '100%',
    height: '50%',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  type: {
    fontSize: '1rem',
  },
  name: {
    fontSize: '1.2rem',
    fontWeight: '700',
    margin: '6px 0 24px',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    fontSize: '0.7rem',
  },
  fakeButton: {
    width: '100%',
  },

}));

// === COMPONENT
const UserPropertyCard = ({
  image,
  type,
  name,
  slug,
  id,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Card
      className={classes.userPropertyCard}
    >
      <CardMedia
        className={classes.cardMedia}
        component="img"
        image={image}
        alt={name}
      />
      <CardContent
        className={classes.content}
      >
        <Typography
          className={classes.type}
          variant="h3"
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
        {id
          ? (
            <Stack
              className={classes.buttonsContainer}
              gap={8}
            >
              <Button
                className={classes.button}
                variant="outlined"
                size="small"
                color="primary"
                onClick={() => navigate(`/${name}/properties/${id}/management`)}
              >
                Manage
              </Button>
              <Button
                className={classes.button}
                size="small"
                color="primary"
                onClick={() => navigate(`/homes/${slug}/${id}`)}
              >
                View
              </Button>
            </Stack>
          )
          : (
            <Button
              className={classes.fakeButton}
              variant="outlined"
              size="small"
              color="primary"
              onClick={() => navigate('/:username/add-property')}
            >
              + Add a property
            </Button>
          )}
      </CardContent>
    </Card>
  );
};

// === propTypes
UserPropertyCard.propTypes = {
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default UserPropertyCard;
