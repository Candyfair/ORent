/* eslint-disable linebreak-style */
// === IMPORTS
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import {
  CardMedia,
  Button,
  Typography,
  Stack,
} from '@mui/material/';

import { capitalizeFirstLetter } from '../../../utils/utils';

// === Styles
const useStyles = makeStyles((theme) => ({
  userPropertyCard: {
    boxShadow: theme.custom.shadow.primary
  },
  content: {
    padding: theme.spacing(2)
  },
  image: {
    height: '200px',
  },
  type: {

  },
  name: {

    fontWeight: 700
  },
  buttonsContainer: {

  }

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
    <Stack
      className={classes.userPropertyCard}
    >
      { image && (
      <CardMedia
        className={classes.image}
        component="img"
        image={image}
        alt={name}
      />
      )}
      <Stack
        className={classes.content}
        gap={2}
      >
        <Typography
          className={classes.type}
          variant="subtitle1"
          component="h5"
        >
          {capitalizeFirstLetter(type)}
        </Typography>

        <Typography
          className={classes.name}
          component="h3"
          variant="h6"
        >
          {capitalizeFirstLetter(name)}
        </Typography>
            <Stack
              className={classes.buttonsContainer}
              gap={3}
              direction='row'
            >
              <Button
                className={classes.button}
                size="small"
                color="primary"
                fullWidth
                onClick={() => navigate(`/homes/${slug}/${id}`)}
              >
                View
              </Button>
              <Button
                className={classes.button}
                variant="outlined"
                fullWidth
                color="primary"
                onClick={() => navigate(`/${name}/properties/${id}/management`)}
              >
                Manage
              </Button>
            </Stack>
      </Stack>
    </Stack>
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
