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
        <div
          className={
            menuStatus
              ? `${css.navigationWrapper} ${css.hidden}`
              : css.navigationWrapper
          }
        >
          <CloseIcon
            onClick={() => {
              setMenuStatus(true);
            }}
            className={css.closeIcon}
            width={16}
            height={16}
          />
          <ul className={css.navigation}>
            <li>
              <NavLink
                className={css.link}
                to="/"
                onClick={() => {
                  setMenuStatus(true);
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={css.link}
                to="/gallery"
                onClick={() => {
                  setMenuStatus(true);
                }}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                className={css.link}
                to="/contact"
                onClick={() => {
                  setMenuStatus(true);
                }}
              >
                Contact
              </NavLink>
            </li>
            <li className={css.orderBtnWrap}>
              <NavLink
                className={`${css.link} ${css.orderLink}`}
                to="/order"
                onClick={() => {
                  setMenuStatus(true);
                }}
              >
                Order Online
              </NavLink>
            </li>
          </ul>
        </div>

        <div className={css.cartWrapper}>
          <NavLink className={css.link} to="/order">
            <CartIcon className={css.cartIcon} />
            <span className={css.cartValue}>0</span>
          </NavLink>
          <BurgerIcon
            onClick={() => {
              setMenuStatus(false);
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
