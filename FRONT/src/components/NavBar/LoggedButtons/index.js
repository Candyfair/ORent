/* eslint-disable linebreak-style */
// IMPORTS
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { makeStyles } from '@mui/styles';
import { Stack, Avatar } from '@mui/material';

import { getInitialsOfUsername } from '../../../utils/utils';
import TopMenu from '../TopMenu';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  avatar: {
    cursor: 'pointer',
    backgroundColor: theme.palette.primary.main,
  },
}));

const LoggedButtons = () => {
  const classes = useStyles();

  const navigate = useNavigate();

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
      <TopMenu username={username} />

      <Avatar
        className={classes.avatar}
        onClick={() => {
          navigate(`/${username.toLowerCase()}/account/`);
          // handleClose();
        }}
      >
        {/* Shows username's initial as avatar */}
        {
          getInitialsOfUsername(username)
        }
      </Avatar>

    </Stack>

  );
};

export default LoggedButtons;
