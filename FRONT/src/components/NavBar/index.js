// MaterialUI imports
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material/';
// === Imports
import SearchBar from './SearchBar';
import Login from './LoginButtons';
import logo from '../../assets/images/logo.png';

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: 'flex',
  },
  logo: {
    height: 50,
  }
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <Box
      sx={{ p: 2 }}
      flexDirection="row"
      justifyContent="space-between"
      className="navbar"
    >
      <img src={logo} alt="Logo O'Rent" className="logo" />
      <SearchBar />
      <Login />
    </Box>
  );
};
export default NavBar;
