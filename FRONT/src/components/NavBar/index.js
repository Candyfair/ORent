// MaterialUI imports
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material/';
// === Imports
import SearchBar from './SearchBar';
import Login from './LoginButtons';
import logo from '../../assets/images/logo.png';

const NavBar = () => (
  <Box
    sx={{ p: 2 }}
    flexDirection="row"
    justifyContent="space-between"
    className="navbar"
  >
    <img src={logo} alt="Logo O'Rent" />
    <SearchBar />
    <Login />
  </Box>
);
export default NavBar;
