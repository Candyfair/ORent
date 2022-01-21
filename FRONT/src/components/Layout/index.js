import NavBar from 'src/components/NavBar';
import Footer from 'src/components/Footer';

const Layout = ({ children }) => (
  <div className="layout" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <div className="header">
      <NavBar />
    </div>
    <div className="pages" style={{ flexGrow: 1 }}>
      {children}
    </div>
    <div className="footer">
      <Footer />
    </div>
  </div>
);

export default Layout;
