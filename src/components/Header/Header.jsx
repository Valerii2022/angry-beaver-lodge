import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.container}>
      <nav className={css.navigation}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/content">Content</NavLink>
      </nav>
    </header>
  );
};

export default Header;
