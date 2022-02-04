// IMPORTS
import PropTypes from 'prop-types';

import {
  Stack, Menu, MenuItem, IconButton, ListItemIcon, ListItemText, Divider,
} from '@mui/material/';

import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router';

import MenuIcon from '@mui/icons-material/Menu';
import ExploreIcon from '@mui/icons-material/Explore';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import LogoutIcon from '@mui/icons-material/Logout';

import { logout } from '../../../redux/actions/userCurrent';

// COMPONENT
const TopMenu = ({ username }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Material UI Menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack>
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
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => {
          navigate('/homes');
          handleClose();
        }}
        >
          <ListItemIcon>
            <ExploreIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Explore</ListItemText>
        </MenuItem>

        <MenuItem onClick={() => {
          navigate('/trips');
          handleClose();
        }}
        >
          <ListItemIcon>
            <CardTravelIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>My trips</ListItemText>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FavoriteIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Wishlist</ListItemText>
        </MenuItem>

        <MenuItem onClick={() => {
          navigate(`/${username.toLowerCase()}/properties/`);
          handleClose();
        }}
        >
          <ListItemIcon>
            <MapsHomeWorkIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>My properties</ListItemText>
        </MenuItem>

        <Divider variant="middle" />

        <MenuItem
          onClick={() => {
            dispatch(logout());
            navigate('/');
          }}
        >
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>

      </Menu>
    </Stack>
  );
};

TopMenu.propTypes = {
  username: PropTypes.string.isRequired,
};

export default TopMenu;
