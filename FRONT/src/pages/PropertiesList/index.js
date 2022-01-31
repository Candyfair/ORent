import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Stack, Box } from '@mui/material/';
import PropertiesCards from '../../components/PropertiesCards';
import PropertiesMap from '../../components/PropertiesMap';

// import cards from '../../data/fakeCards';
import { fetchProperties } from '../../redux/actions/propertiesFetch';
import Loader from '../../components/Loader';

const useStyles = makeStyles((theme) => ({
  propertiesList: {
    padding: `${theme.spacing(2)} 0`,
    width: '100%',
  },
  cards: {
    width: '50%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  map: {
    width: '50%',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

const PropertiesList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.displayOptions);
  const { propertiesList } = useSelector((state) => state.propertyCurrent);

  useEffect(() => {
    dispatch(fetchProperties());
  }, []);

  if (loading) return <Loader />;
  if (propertiesList.length === 0) return null;

  return (
    <Stack
      className={classes.propertiesList}
      flexDirection="row"
    >
      <Box className={classes.cards}>
        <PropertiesCards cards={propertiesList} />
      </Box>
      <Box className={classes.map}>
        <PropertiesMap cards={propertiesList} />
      </Box>
    </Stack>
  );
};

export default PropertiesList;
