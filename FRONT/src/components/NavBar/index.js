// MaterialUI imports
import { Grid } from '@mui/material/';
// === Imports
import SearchBar from './SearchBar';
import Login from './LoginButtons';
import logo from '../../assets/images/logo.png';

const NavBar = () => (
  <Grid
    display="flex"
    direction="row"
    alignItems="center"
    justifyContent="center"
  >
    {/* Logo */}
    <Grid item xs={2}>
      <img src={logo} alt="Logo O'Rent" />
    </Grid>
    {/* Search bar component */}
    <Grid item xs={8}>
      <SearchBar />
    </Grid>
    {/* Login Component */}
    <Grid item xs={2}>
      <Login />
    </Grid>
  </Grid>
);
export default NavBar;
