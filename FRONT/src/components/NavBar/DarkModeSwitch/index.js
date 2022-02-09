// IMPORTS
import { IconButton, Box, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import LightModeIcon from '@mui/icons-material/LightMode';

import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../../../redux/actions/displayOptions';

// COMPONENTS
const useStyles = makeStyles((theme) => ({
  switch: {
    color: theme.palette.text.secondary
  },
}));

const DarkModeSwitch = () => {
  const { mode } = useSelector((state) => state.displayOptions);
  const classes = useStyles()

  const dispatch = useDispatch();

  const handleDarkModeChange = () => {
    if (mode === "light") {
        dispatch(setMode("dark"))
        localStorage.setItem('darkModeLS', JSON.stringify("dark"));
    } else {
        dispatch(setMode("light"))
        localStorage.setItem('darkModeLS', JSON.stringify("light"));
    }
  }

  return (
    <Tooltip
      title={mode === 'light' ? 'Dark Mode' : 'Light Mode'}
      arrow
    >
      <IconButton
        onClick={handleDarkModeChange}
        className={classes.switch}
      >
        {mode === 'dark'
          ? <LightModeIcon />
          : <Brightness2Icon />}
      </IconButton>
    </Tooltip>
  );
};
export default DarkModeSwitch;
