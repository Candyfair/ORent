import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import ScrollTop from 'src/components/ScrollTop';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import ModalDisplay from './components/ModalDisplay';

// MaterialUI theme components
import lightTheme from './styles/themes/lightTheme';
import darkTheme from './styles/themes/darkTheme';

import {
  Home,
  BookingDetails,
  BookingsList,
  MyAccount,
  PropertiesList,
  PropertyDetails,
  AddPropertyForm,
  ManagePropertyForm,
  UserProperties,
} from './pages';

import Layout from './components/Layout';
import { refreshToken } from './redux/actions/userCurrent';
import TermsOfUse from './pages/TermsOfUse';
import Faq from './pages/Faq';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Error404 from './pages/Error404';
import SnackbarModule from './components/SnackbarModule';


// == Composant
const App = () => {
  const dispatch = useDispatch();

  const { mode } = useSelector((state) => state.displayOptions);

  useEffect(
    () => {
      // If there's a refresh token in localStorage, runs the /refresh-token route
      const refreshTokenLS = localStorage.getItem('userRefreshToken');
      if (refreshTokenLS) dispatch(refreshToken());
    }, [],
  );

  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <div className="app">
        <CssBaseline />
        <ScrollTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/homes" element={<PropertiesList />} />
            <Route path="/homes/:slug/:id" element={<PropertyDetails />} />
            <Route path="/:username/account/" element={<MyAccount />} />
            <Route path="/:username/properties/:id/management" element={<ManagePropertyForm />} />
            <Route path="/:username/add-property" element={<AddPropertyForm />} />
            <Route path="/:username/properties/" element={<UserProperties />} />
            <Route path="/trips" element={<BookingsList />} />
            <Route path="/trips/:tripId" element={<BookingDetails />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <ModalDisplay />
          <SnackbarModule />
        </Layout>
      </div>
    </ThemeProvider>
  );
};

// == Export
export default App;
