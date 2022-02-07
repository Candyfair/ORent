/* eslint-disable linebreak-style */
// MaterialUI hook & components import
import { makeStyles } from '@mui/styles';
import {
  Stack, InputBase, Button, InputAdornment, FormControl, InputLabel, Select, MenuItem, TextField, Tooltip,
} from '@mui/material';
import { alpha } from '@mui/material/styles';

import { useDispatch, useSelector } from 'react-redux';
import { changeSearchField } from '../../../redux/actions/search';

import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { useNavigate } from 'react-router';
import { useState } from 'react';

// MaterialUI theme import
const useStyles = makeStyles((theme) => ({
  search: {
    backgroundColor: alpha(theme.palette.text.disabled, 0.05),
    maxWidth: '700px',
    borderRadius: 5,
    [theme.breakpoints.down('md')]: {
      width: '330px'
    }
  },
  form:{
    width: '500px',
    display: 'flex',
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButton: {
    color: theme.palette.common.white,
    width: '20%',
    borderRadius: '0 5px 5px 0',
    border: `1px solid ${alpha(theme.palette.text.disabled, 0.05)}` 
  },
  country: {
    paddingLeft: theme.spacing(2),
    flexGrow: 1,
    color: theme.palette.text.primary,
    height: '100%'
  },
  capacity: {
    width: '25%',
    paddingLeft: theme.spacing(2),
  },
  input: {
    height: 36.5,
    outline: 'none',
    color: theme.palette.text.secondary,
  },
  selectRoot: {
    height: 36.5,
    display: "table"
  },
  select: {
    height: 36.5,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    display: "table-cell",
    verticalAlign: "middle",
    outline: 'none',
    color: theme.palette.text.disabled,
  },
}
));

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();

  const [searchError, setSearchError] = useState(false)

  const { country, capacity } = useSelector((state) => state.search)

  const handleClickSearch = () => {
    if(country === 'Destination' || !capacity) {
      setSearchError(true)
    } else {
      navigate(`/search?destination=${country}&people=${capacity}`, { replace: false })
      setSearchError(false)
      location.reload();
    }
  }

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      flexGrow={1}
      className={classes.search}
    >
      <Tooltip 
        title='Please pick a destination and set a number of people'
        placement='bottom'
        arrow
        open={searchError}
        color='error'
      >
        <form
          className={classes.form}
        >
          <TextField
            variant="standard"
            className={classes.country}
            select
            placeholder="Destination"
            InputLabelProps={{
              shrink: true
            }}
            SelectProps={{
              classes: {
                root: classes.selectRoot,
                select: classes.select
              }
            }}
            InputProps={{
              disableUnderline: true
            }}
            value={country}
            onChange={(e) => dispatch(changeSearchField(e.target.value, 'country'))}
          >
            <MenuItem value="Destination">Destination</MenuItem>
            <MenuItem value="France">France</MenuItem>
            <MenuItem value="Italy">Italy</MenuItem>
            <MenuItem value="Greece">Greece</MenuItem>
            <MenuItem value="Spain">Spain</MenuItem>
            <MenuItem value="United Kingdom">United Kingdom</MenuItem>
          </TextField>

          <TextField
            variant="standard"
            className={classes.capacity}
            placeholder='People'
            value={capacity}
            type='number'
            onChange={(e) => dispatch(changeSearchField(e.target.value, 'capacity'))}
            size="sm"
            InputProps={{
              className: classes.input,
              disableUnderline: true
            }}
            InputLabelProps={{
              shrink: true,
            }}
            error={searchError}
          >
            people
          </TextField>
          <Button
            variant="contained"
            color="primary"
            className={classes.searchButton}
            disableElevation
            fullWidth
            onClick={handleClickSearch}
          >
            <TravelExploreIcon />
          </Button>
        </form>
      </Tooltip>
    </Stack>
  );
};

export default SearchBar;
