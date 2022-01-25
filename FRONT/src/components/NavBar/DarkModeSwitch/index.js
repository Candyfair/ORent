// IMPORTS
import { IconButton, Box, Tooltip } from '@mui/material';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import LightModeIcon from '@mui/icons-material/LightMode';

import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../../../redux/actions/displayOptions';

// COMPONENTS
const DarkModeSwitch = () => {
  const { mode } = useSelector((state) => state.displayOptions);

  const dispatch = useDispatch();

  return (
    <Box>
      <IconButton
        onClick={() => dispatch(setMode(mode === 'light' ? 'dark' : 'light'))}
        color="inherit"
      >
        {mode === 'dark'
          ? <LightModeIcon color="disabled" />
          : <Brightness2Icon color="disabled" />}
      </IconButton>
    </Box>
  );
};
export default DarkModeSwitch;
