import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { getItems } from 'redux/selectors';
import { scrollToTop } from 'helpers/scrollToTop';
import logo from '../../images/logo.webp';
import icons from '../../images/icons.svg';
import css from './Header.module.css';

const Header = () => {
  const [menuStatus, setMenuStatus] = useState(true);
  const [header, setHeader] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const homePage = location.pathname.endsWith('/');

  const cartItems = useSelector(getItems);

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
    document.body.classList.remove('lock');
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
        {!homePage && (
          <a className={css.logoLink} href="/angry-beaver-lodge">
            <img
              className={css.logo}
              src={logo}
              alt="Logo"
              width={147}
              height={85}
            />
          </a>
        )}
        <div
          className={
            menuStatus
              ? `${css.navigationWrapper} ${css.hidden}`
              : css.navigationWrapper
          }
        >
          <button className={css.closeIcon} aria-label="Close navigation menu">
            <svg
              onClick={handleNavigateLinkClick}
              width={16}
              height={16}
              className={css.icon}
            >
              <use href={`${icons}#close`} />
            </svg>
          </button>
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
                  handleNavigateLinkClick();
                }}
              >
                Order Online
              </button>
            </li>
          </ul>
        </div>

        <div className={css.cartWrapper}>
          <button
            aria-label="View cart"
            className={`${css.link} ${css.cartLink}`}
            onClick={() => {
              navigate('/order', { state: { cart: true } });
            }}
          >
            <svg className={css.icon} width={23} height={20}>
              <use href={`${icons}#cart`} />
            </svg>
            <span className={css.cartValue}>{cartItems.length}</span>
          </button>
          <button className={css.burgerIcon} aria-label="Open navigation menu">
            <svg
              onClick={() => {
                document.body.classList.add('lock');
                setMenuStatus(false);
              }}
              className={css.icon}
              width={16}
              height={16}
            >
              <use href={`${icons}#burger`} />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
