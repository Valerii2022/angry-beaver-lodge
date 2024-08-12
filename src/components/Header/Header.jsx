import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.webp';
import icons from '../../images/icons.svg';
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
          <svg
            onClick={handleNavigateLinkClick}
            className={css.closeIcon}
            width={16}
            height={16}
          >
            <use href={`${icons}#close`} />
          </svg>
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
            className={`${css.link} ${css.cartLink}`}
            onClick={() => {
              document.body.classList.add('lock');
              navigate('/order', { state: { cart: true } });
            }}
          >
            <svg className={css.cartIcon}>
              <use href={`${icons}#cart`} />
            </svg>
            <span className={css.cartValue}>0</span>
          </button>
          <svg
            onClick={() => {
              document.body.classList.add('lock');
              setMenuStatus(false);
            }}
            className={css.burgerIcon}
            width={16}
            height={16}
          >
            <use href={`${icons}#burger`} />
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default Header;
