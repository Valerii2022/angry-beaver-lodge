import { useLocation } from 'react-router-dom';
import SocialLinks from 'components/SocialLinksList/SocialLinksList';
import css from './Footer.module.css';

const Footer = () => {
  const { pathname } = useLocation();
  const orderPage = pathname.includes('order');

  return (
    <footer
      className={
        orderPage ? `${css.footer} ${css.orderFooter}` : `${css.footer}`
      }
    >
      <div className={css.container}>
        <div className={css.socialWrapper}>
          <SocialLinks />
        </div>
        <div className={css.footerBottom}>
          <p>
            Powered by{' '}
            <a
              className={css.manufyLink}
              href="https://www.menufy.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Manufy
            </a>
            &#169; 2023
          </p>
          <ul className={css.linksList}>
            <li>
              <a
                className={css.footerLink}
                href="https://restaurant.menufy.com/accessibility-statement"
                target="_blank"
                rel="noopener noreferrer"
              >
                Accessibility
              </a>
            </li>
            <li>
              <a
                className={css.footerLink}
                href="https://restaurant.menufy.com/customer-terms-of-use"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms
              </a>
            </li>
            <li>
              <a
                className={css.footerLink}
                href="https://support.menufy.com/hc/en-us"
                target="_blank"
                rel="noopener noreferrer"
              >
                Help
              </a>
            </li>
            <li>
              <a
                className={css.footerLink}
                href="https://restaurant.menufy.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
