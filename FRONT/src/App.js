import { Routes, Route } from 'react-router-dom';
// import Counter from './components/Counter';
import Menu from './components/Menu';

import { Home, Detail, Explore } from './pages';

// == Composant
const App = () => (
  <div className="app">
    {/* <h1>Composant : App</h1>
    <Counter /> */}
    <Menu />
    <hr />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/explore" element={<Explore />} />
    </Routes>
  </div>
);

// == Export
export default App;
