import { NavLink } from 'react-router-dom';

const Menu = () => (
  <div>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/explore">Explore</NavLink>
      <NavLink to="/detail">Detail</NavLink>
    </nav>
  </div>
);

export default Menu;
