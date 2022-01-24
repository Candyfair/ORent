// MaterialUI imports
import { Stack, AppBar, Toolbar } from '@mui/material/';
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
  },
}));

// Exported component
const Navbar = () => {

  const classes = useStyles();

  return (
    <AppBar
      position='fixed'
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


// const NavBar = () => (
//   <Grid
//     display="flex"
//     direction="row"
//     alignItems="center"
//     justifyContent="center"
//   >
//     {/* Logo */}
//     <Grid item xs={2}>
//       <img src={logo} alt="Logo O'Rent" />
//     </Grid>
//     {/* Search bar component */}
//     <Grid item xs={8}>
//       <SearchBar />
//     </Grid>
//     {/* Login Component */}
//     <Grid item xs={2}>
//       <Login />
//     </Grid>
//   </Grid>
// );
// export default NavBar;
