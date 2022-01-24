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
  },
  toolbar: {
    justifyContent: 'space-between',
    backgroundColor: theme.palette.common.white,
  },
}));

// Exported component
const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar
      // position="fixed"
      elevation={0}
      className={classes.appbar}
    >
      <Toolbar
        className={classes.toolbar}
      >
        <img src={logo} alt="Logo O'Rent" />
        <SearchBar />
        <LoginButton />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
