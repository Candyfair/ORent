// MaterialUI imports
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material/';
// === Imports
import SearchBar from './SearchBar';
import Login from './LoginButtons';

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: 'flex',
  },
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
      <div>Logo O'Rent</div>
      <SearchBar />
      <Login />
    </Box>
  );
};
export default NavBar;
