// IMPORTS
import { makeStyles } from '@mui/styles';

import NavBar from 'src/components/NavBar';
import Footer from 'src/components/Footer';

// MUI STYLES
const useStyles = makeStyles((theme) => ({
  header: {
    height: '7vh',
  },
  pages: {
    flexGrow: 1,
    width: '100vw',
  },
  footer: {
    height: '7vh',
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
