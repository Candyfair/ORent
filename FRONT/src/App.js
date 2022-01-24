import { Routes, Route } from 'react-router-dom';

import {
  Home,
  BookingDetails,
  BookingsList,
  MyAccount,
  PropertiesList,
  PropertyDetail,
  PropertyForm,
  UserProperties,
} from './pages';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

// == Composant
const App = () => (
  <div className="app">
    <NavBar />
    <hr />
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
    <hr />
    <Footer />
  </div>
);

// == Export
export default App;
