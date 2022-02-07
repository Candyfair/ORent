// IMPORTS
import { Stack } from '@mui/material/';
import { makeStyles } from '@mui/styles';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { searchDestination } from '../../redux/actions/search';


// MUI STYLES
const useStyles = makeStyles((theme) => ({
    searchPage: {
    width: '100vw',
  },
}));

// COMPONENT
const SearchPage = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [searchParams, setSearchParams] = useSearchParams();

  const destination = searchParams.get('destination')
  const capacity = searchParams.get('destination')

  useEffect(
    () => {
      dispatch(searchDestination(destination, capacity))
    }, []);

  return (
    <Stack
      flexDirection="column"
      spacing={5}
      className={classes.searchPage}
      justifyContent="center"
      alignItems="center"
    >
      Search
    </Stack>
  );
};

export default SearchPage;
