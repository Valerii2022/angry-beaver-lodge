import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import { ReactComponent as CartIcon } from '../../images/cart.svg';
import { ReactComponent as CloseIcon } from '../../images/close.svg';
import { ReactComponent as BurgerIcon } from '../../images/burger.svg';
import { useState } from 'react';

const Header = () => {
  const [menuStatus, setMenuStatus] = useState(true);
  return (
    <header className={css.container}>
      <nav>
        {menuStatus && (
          <div className={css.navigationWrapper}>
            <CloseIcon
              onClick={() => {
                setMenuStatus(false);
              }}
              className={css.closeIcon}
              width={16}
              height={16}
            />
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
            </ul>
          </div>
        )}
        <div className={css.cartWrapper}>
          <NavLink className={css.link} to="/order">
            <CartIcon className={css.cartIcon} />
            <span className={css.cartValue}>0</span>
          </NavLink>
          <BurgerIcon
            onClick={() => {
              setMenuStatus(true);
            }}
            className={css.burgerIcon}
            width={16}
            height={16}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
