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
  PropertyForm,
  UserProperties,
} from './pages';

import Layout from './components/Layout';
import { refreshToken } from './redux/actions/userCurrent';

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
            <Route path="/homes/:id" element={<PropertyDetails />} />
            <Route path="/account/:username" element={<MyAccount />} />
            <Route path="/properties/:id/management" element={<PropertyForm />} />
            <Route path="/properties/:username" element={<UserProperties />} />
            <Route path="/trips" element={<BookingsList />} />
            <Route path="/trips/:tripId" element={<BookingDetails />} />
          </Routes>
          <ModalDisplay />
        </Layout>
      </div>
    </ThemeProvider>
  );
};

// == Export
export default App;
