// MaterialUI imports
import {
  AppBar, Toolbar, Stack, Box,
} from '@mui/material/';
import { makeStyles } from '@mui/styles';
// === Imports
import SearchBar from './SearchBar';
import LoginButton from './LoginButton';
import LoggedButtons from './LoggedButtons';
import NavBarOffset from './NavBarOffset';
import DarkModeSwitch from './DarkModeSwitch';
import logo from '../../assets/images/logo.png';

const useStyles = makeStyles((theme) => ({
  appbar: {
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.custom.shadow.primary,
  },
  toolbar: {
    flexGrow: 1,
    padding: `${theme.spacing(1)} 0`,
    gap: theme.spacing(1),
  },
  desktop: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mobile: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  buttonsDesktop: {
    justifyContent: 'flex-end',
  },
  searchbarDesktop: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  searchbarMobile: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

// Exported component
const Navbar = () => {
  const classes = useStyles();

  return (
    <Box>
      <AppBar
        position="fixed"
        elevation={0}
        className={classes.appbar}
      >
        {/* Navigation for desktop */}
        <Toolbar>
          <Stack
            flexDirection="column"
            className={classes.toolbar}
          >
            <Stack
              flexDirection="row"
              className={classes.desktop}
            >
              <img src={logo} alt="Logo O'Rent" />
              <Stack className={classes.searchbarDesktop}>
                <SearchBar />
              </Stack>
              <Stack
                flexDirection="row"
                gap={2}
                className={classes.buttonsDesktop}
              >
                <DarkModeSwitch />
                <LoginButton />
                <LoggedButtons />
              </Stack>
            </Stack>

            {/* Navigation for mobile: searchbar */}
            <Stack className={classes.mobile}>
              <Box className={classes.searchbarMobile}>
                <SearchBar />
              </Box>
            </Stack>

          </Stack>
        </Toolbar>

      </AppBar>

      <NavBarOffset />
    </Box>
  );
};

export default Navbar;
