/* eslint-disable linebreak-style */
// MaterialUI hook & components import
import { makeStyles } from '@mui/styles';
import {
  Stack, InputBase, Button, InputAdornment,
} from '@mui/material';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

// MaterialUI theme import
const useStyles = makeStyles((theme) => ({
  search: {
    backgroundColor: theme.palette.common.white,
    maxWidth: '500px',
  },
  locationInput: {
    border: `1px solid ${theme.palette.grey[400]}`,
    borderRadius: `${theme.shape.borderRadius}px 0px 0px ${theme.shape.borderRadius}px`,
    paddingLeft: '5px',
    paddingRight: '5px',
    width: '50%',
  },
  guestsInput: {
    border: `1px solid ${theme.palette.grey[400]}`,
    borderRadius: `0px ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0px`,
    paddingLeft: '5px',
    paddingRight: '5px',
    width: '20%',
  },
  searchButton: {
    marginLeft: 4,
    width: '20%',
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
          endAdornment={(
            <InputAdornment position="end">
              <LocationSearchingIcon
                fontSize="small"
              />
            </InputAdornment>
          )}
        />

        {/* Guests number input */}
        <InputBase
          size="medium"
          placeholder="Guests"
          className={classes.guestsInput}
          endAdornment={(
            <InputAdornment position="end">
              <PersonAddIcon
                fontSize="small"
              />
            </InputAdornment>
          )}
        />

        {/* Search  icon */}
        <Button
          variant="outlined"
          color="primary"
          className={classes.searchButton}
        >
          Search
        </Button>
      </form>
    </Stack>
  );
};

export default SearchBar;
