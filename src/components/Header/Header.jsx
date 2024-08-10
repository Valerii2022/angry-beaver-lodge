import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.avif';
import { ReactComponent as CartIcon } from '../../images/cart.svg';
import { ReactComponent as CloseIcon } from '../../images/close.svg';
import { ReactComponent as BurgerIcon } from '../../images/burger.svg';
import { scrollToTop } from 'helpers/scrollToTop';
import css from './Header.module.css';

const Header = () => {
  const [menuStatus, setMenuStatus] = useState(true);
  const [header, setHeader] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const homePage = location.pathname.endsWith('/');

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

  const handleNavigateLinkClick = () => {
    scrollToTop();
    setMenuStatus(true);
  };

  return (
    <header
      className={
        homePage
          ? `${css.homeContainer} ${css.container} ${header}`
          : css.container
      }
    >
      <nav className={!homePage ? css.pagesNavigate : ''}>
        {!homePage && <img src={logo} alt="Logo" width={147} height={85} />}
        <div
          className={
            menuStatus
              ? `${css.navigationWrapper} ${css.hidden}`
              : css.navigationWrapper
          }
        >
          <CloseIcon
            onClick={handleNavigateLinkClick}
            className={css.closeIcon}
            width={16}
            height={16}
          />
          <ul className={css.navigation}>
            <li>
              <NavLink
                className={css.link}
                to="/"
                onClick={handleNavigateLinkClick}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={css.link}
                to="/gallery"
                onClick={handleNavigateLinkClick}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                className={css.link}
                to="/contact"
                onClick={handleNavigateLinkClick}
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
