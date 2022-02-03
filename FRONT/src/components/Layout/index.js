// IMPORTS
import { makeStyles } from '@mui/styles';

import NavBar from 'src/components/NavBar';
import Footer from 'src/components/Footer';
import { Stack, Box } from '@mui/material';


// MUI STYLES
const useStyles = makeStyles((theme) => ({
  layout:{
    minHeight: '100vh',
  },
  header: {

  },
  pages: {
    flexGrow: 1,
    [theme.breakpoints.down('md')]:{
      marginTop: theme.spacing(4),
    },
  },
  footer: {
  },
}));

// COMPONENT
const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <Stack className={classes.layout}>
      <Box className={classes.header}>
        <NavBar />
      </Box>
      <Box className={classes.pages}>
        {children}
      </Box>
      <Box className={classes.footer}>
        <Footer />
      </Box>
    </Stack>
  );
};

export default Layout;
