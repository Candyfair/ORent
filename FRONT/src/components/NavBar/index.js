// MaterialUI imports
import { AppBar, Toolbar } from '@mui/material/';
import { makeStyles } from '@mui/styles';
// === Imports
import SearchBar from './SearchBar';
import LoginButton from './LoginButton';
import logo from '../../assets/images/logo.png';

const useStyles = makeStyles((theme) => ({
  appbar: {
    display: 'flex',
    backgroundColor: theme.palette.common.white,
  },
  toolbar: {
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
      marginBottom: '10px',
    },
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
  logoMobile: {
    flexGrow: 1,
    textAlign: 'left',
  },
}));

// Exported component
const Navbar = () => {
  const classes = useStyles();

  return (

    <AppBar
      position="fixed"
      elevation={0}
      className={classes.appbar}
    >
      {/* Navigation for desktop */}
      <div className={classes.searchbarDesktop}>
        <Toolbar
          className={classes.toolbar}
        >
          <img src={logo} alt="Logo O'Rent" />
          <SearchBar />
          <LoginButton />
        </Toolbar>
      </div>

      {/* Navigation for mobile */}
      <div className={classes.searchbarMobile}>
        <Toolbar
          className={classes.toolbar}
        >
          <div className={classes.logoMobile}>
            <img src={logo} alt="Logo O'Rent" />
          </div>
          <LoginButton />
          <SearchBar />
        </Toolbar>
      </div>

    </AppBar>
  );
};

export default Navbar;
