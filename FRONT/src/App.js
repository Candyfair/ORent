import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import ScrollTop from 'src/components/ScrollTop';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ModalDisplay from './components/ModalDisplay';

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

  useEffect(
    () => {
      // If there's a refresh token in localStorage, runs the /refresh-token route
      const refreshTokenLS = localStorage.getItem('userRefreshToken');
      if (refreshTokenLS) dispatch(refreshToken());
    }, [],
  );

  return (
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
  );
}
// == Export
export default App;
