import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import { ReactComponent as CartIcon } from '../../images/cart.svg';

const Header = () => {
  return (
    <header className={css.container}>
      <nav>
        <ul className={css.navigation}>
          <li>
            <NavLink className={css.link} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={css.link} to="/gallery">
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink className={css.link} to="/contact">
              Contact
            </NavLink>
          </li>
          <li className={css.orderBtnWrap}>
            <NavLink className={css.link} to="/order">
              Order Online
            </NavLink>
          </li>
          <li>
            <NavLink className={css.link} to="/order">
              <CartIcon width="17" height="15" />
              <span className={css.cartValue}>0</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
