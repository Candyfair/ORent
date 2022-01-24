/* eslint-disable linebreak-style */
// MaterialUI hook & components import
import { makeStyles } from '@mui/styles';
import { Stack, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// MaterialUI theme import
const useStyles = makeStyles((theme) => ({
  search: {
    backgroundColor: theme.palette.primary.light,
    maxWidth: '500px',
  },
  locationInput: {
    border: `1px solid ${theme.palette.grey[400]}`,
    borderRadius: `${theme.shape.borderRadius}px 0px 0px ${theme.shape.borderRadius}px`,
    paddingLeft: '5px',
    width: '50%',
  },
  guestsInput: {
    border: `1px solid ${theme.palette.grey[400]}`,
    borderRadius: `0px ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0px`,
    paddingLeft: '5px',
    width: '30%',
  },
  searchButton: {
    marginLeft: 4,
    width: '15%',
  },
}
));

const SearchBar = () => {
  const classes = useStyles();

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={0}
      flexGrow={1}
      className={classes.search}
    >
      <form
        className={classes.form}
      >
        {/* Location search input */}
        <InputBase
          size="medium"
          placeholder="Location"
          className={classes.locationInput}
        />
        {/* Guests number input */}
        <InputBase
          size="medium"
          placeholder="Guests"
          className={classes.guestsInput}
        />
        {/* Search  icon */}
        <IconButton
          color="secondary"
          className={classes.searchButton}
        >
          <SearchIcon />
        </IconButton>
      </form>
    </Stack>
  );
};

export default SearchBar;
