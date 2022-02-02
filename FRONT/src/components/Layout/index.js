// IMPORTS
import { makeStyles } from '@mui/styles';

import NavBar from 'src/components/NavBar';
import Footer from 'src/components/Footer';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  header: {

  },
  pages: {
    flexGrow: 1,
    width: '98vw',
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
    <div className="layout" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div className={classes.header}>
        <NavBar />
      </div>
      <div className={classes.pages}>
        {children}
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
