/* eslint-disable linebreak-style */
// IMPORTS
import {
  Stack, Button, Avatar, Menu, MenuItem, IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { logout } from '../../../redux/actions/userCurrent';
import { getInitialsOfUsername } from '../../../utils/utils';

// COMPONENT
const LoggedButtons = () => {
  // Material UI Menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();

  const { isLogged, username } = useSelector((state) => state.userCurrent);

  if (!isLogged) return null; // Doesn't show component if not logged

  return (
    <Stack
      flexDirection="row"
      gap={2}
      alignItems="center"
      justifyContent="center"
    >
      {/* MENU */}
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Explore</MenuItem>
        <MenuItem onClick={handleClose}>My trips</MenuItem>
        <MenuItem onClick={handleClose}>Wishlist</MenuItem>
        <MenuItem onClick={handleClose}>My properties</MenuItem>
        <MenuItem
          onClick={() => dispatch(logout())}
        >
          Logout
        </MenuItem>

      </Menu>

      {/* Shows username's initial as avatar */}
      <Avatar>
        {
          getInitialsOfUsername(username)
        }
      </Avatar>

    </Stack>

  );
};

export default LoggedButtons;
