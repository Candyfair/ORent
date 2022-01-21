/* eslint-disable linebreak-style */
// MaterialUI hook & components import
import { makeStyles } from '@mui/styles';
import { Stack, InputBase } from '@mui/material';

// MaterialUI theme import
const useStyles = makeStyles((theme) => ({
  locationInput: {
    border: `1px solid ${theme.palette.grey[400]}`,
    borderRadius: `${theme.shape.borderRadius}px 0px 0px ${theme.shape.borderRadius}px`,
    paddingLeft: '5px',
  },
  guestsInput: {
    border: `1px solid ${theme.palette.grey[400]}`,
    borderRadius: `0px ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0px`,
    paddingLeft: '5px',
  },
}
));

const SearchBar = () => {
  const classes = useStyles();

  return (
    <form
      className={classes.form}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={-0.1}
        flexGrow={1}
        className={classes.search}
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
          placeholder="Add guests"
          className={classes.guestsInput}
        />
      </Stack>
    </form>
  );
};

export default SearchBar;
