// IMPORTS
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router';
import { makeStyles } from '@mui/styles';
import { Stack, Typography } from '@mui/material/';

import UserPropertiesCards from '../../components/UserPropertiesCards';
import { fetchMyProperties } from '../../redux/actions/propertiesFetch';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  userProperties: {

  },

}));

// COMPONENT
const UserProperties = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { myProperties } = useSelector((state) => state.propertyCurrent);
  const { loading } = useSelector((state) => state.displayOptions);

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
        margin='16px 0'
      >
        List of my properties
      </Typography>
      <UserPropertiesCards cards={myProperties} />
    </Stack>
  );
};

export default UserProperties;
