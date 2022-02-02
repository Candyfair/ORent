// IMPORTS
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router';
import { makeStyles } from '@mui/styles';
import { Stack, Typography } from '@mui/material/';

import UserPropertiesCards from '../../components/UserPropertiesCards';
import cards from '../../data/fakeCards';
import { fetchMyProperties } from '../../redux/actions/propertiesFetch';

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
  const dispatch = useDispatch();
  const { myProperties } = useSelector((state) => state.propertyCurrent);
  const { loading } = useSelector((state) => state.displayOptions);
  // const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMyProperties());
  }, []);

  if (loading) return null;

  return (
    <Stack className={classes.userProperties}>
      <Typography
        className={classes.header}
        variant="h4"
        align="center"
      >
        List of my properties
      </Typography>
      <UserPropertiesCards cards={myProperties} />
    </Stack>
  );
};

export default UserProperties;
