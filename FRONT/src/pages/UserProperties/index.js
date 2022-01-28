// IMPORTS
import { useNavigate } from 'react-router';
import { makeStyles } from '@mui/styles';
import { Stack, Button, Typography } from '@mui/material/';

import UserPropertiesCards from '../../components/UserPropertiesCards';
import cards from '../../data/fakeCards';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  userProperties: {
    padding: `${theme.spacing(2)} 0`,
    width: '100%',
    height: '100%',
  },
  cards: {
    width: '100%',
  },
  btnNewProperty: {
    width: '160px',
  },
}));

// COMPONENT
const UserProperties = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  if (cards.length === 0) return null;

  return (
    <Stack
      className={classes.userProperties}
      flexDirection="column"
      spacing={4}
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        variant="h4"
        align="center"
      >
        List of my properties
      </Typography>
      <UserPropertiesCards cards={cards} />
      <Button
        onClick={() => navigate('/:username/add-property')}
        variant="contained"
        color="primary"
        className={classes.btnNewProperty}
      >
        Add a property
      </Button>
    </Stack>
  );
};

export default UserProperties;
