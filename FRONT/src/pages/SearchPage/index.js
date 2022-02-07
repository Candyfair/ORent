// IMPORTS
import { Stack } from '@mui/material/';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import PropertiesCards from '../../components/PropertiesCards';
import PropertiesMap from '../../components/PropertiesMap';
import { searchDestination } from '../../redux/actions/search';


// MUI STYLES
const useStyles = makeStyles((theme) => ({
  searchPage: {
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

// COMPONENT
const SearchPage = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [searchParams, setSearchParams] = useSearchParams();

  const destination = searchParams.get('destination')
  const capacity = searchParams.get('people')

  console.log('destination query : ', destination);
  console.log('capacity query : ', capacity);

  const { loading } = useSelector((state) => state.displayOptions);
  const { searchResults } = useSelector((state) => state.search);

  useEffect(
    () => {
      dispatch(searchDestination(destination, capacity))
    }, []);

  if (loading) return null
  if (searchResults.length === 0) return null

  return (
    <Stack
      flexDirection="column"
      spacing={5}
      className={classes.searchPage}
      justifyContent="center"
      alignItems="center"
    >
      <Box className={classes.cards}>
        <PropertiesCards cards={searchResults} />
      </Box>
      <Box className={classes.map}>
        <PropertiesMap cards={searchResults} />
      </Box>
    </Stack>
  );
};

export default SearchPage;
