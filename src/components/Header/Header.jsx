import { NavLink, useNavigate } from 'react-router-dom';
import css from './Header.module.css';
import { ReactComponent as CartIcon } from '../../images/cart.svg';
import { ReactComponent as CloseIcon } from '../../images/close.svg';
import { ReactComponent as BurgerIcon } from '../../images/burger.svg';
import { useEffect, useState } from 'react';

const Header = () => {
  const [menuStatus, setMenuStatus] = useState(true);
  const [header, setHeader] = useState('');
  const navigate = useNavigate();

  const listenScrollEvent = () => {
    if (window.scrollY < 53) {
      return setHeader(css.defaultContainer);
    } else if (window.scrollY > 50) {
      return setHeader(css.scrollContainer);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <header className={`${css.container} ${header}`}>
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
              <button
                className={`${css.link} ${css.orderLink}`}
                onClick={() => {
                  navigate('/order');
                  setMenuStatus(true);
                }}
              >
                Order Online
              </button>
            </li>
          </ul>
        </div>

        <div className={css.cartWrapper}>
          <button
            className={`${css.link} ${css.cartLink}`}
            onClick={() => {
              navigate('/order');
            }}
          >
            <CartIcon className={css.cartIcon} />
            <span className={css.cartValue}>0</span>
          </button>
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
