// IMPORTS
// import { useNavigate } from 'react-router';
import { makeStyles } from '@mui/styles';
import { Stack, Typography } from '@mui/material/';

import UserPropertiesCards from '../../components/UserPropertiesCards';
import cards from '../../data/fakeCards';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  userProperties: {
    maxWidth: '1920px',
  },
  header: {
    marginTop: '12px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '64px',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '64px',
    },
  },
}));

// COMPONENT
const UserProperties = () => {
  const classes = useStyles();
  // const navigate = useNavigate();

  if (cards.length === 0) return null;

  return (
    <Stack className={classes.userProperties}>
      <Typography
        className={classes.header}
        variant="h4"
        align="center"
      >
        List of my properties
      </Typography>
      <UserPropertiesCards cards={cards} />
    </Stack>
  );
};

export default UserProperties;
