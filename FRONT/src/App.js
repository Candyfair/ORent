import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import ScrollTop from 'src/components/ScrollTop';
import ModalDisplay from './components/ModalDisplay';

import {
  Home,
  BookingDetails,
  BookingsList,
  MyAccount, PropertiesList, PropertyDetail, PropertyForm, UserProperties,
} from './pages';

import Layout from './components/Layout';

// == Composant
const App = () => (
  <div className="app">
    <CssBaseline />
    <ScrollTop />
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homes" element={<PropertiesList />} />
        <Route path="/homes/:id" element={<PropertyDetail />} />
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

// == Export
export default App;
