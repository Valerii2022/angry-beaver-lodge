import css from './Footer.module.css';
import { ReactComponent as FacebookIcon } from '../../images/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../images/instagram.svg';
import { ReactComponent as YelpIcon } from '../../images/yelp.svg';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <ul className={css.socialIconList}>
          <li>
            <a
              className={css.socialIconLink}
              href="https://uk-ua.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="facebook"
            >
              <FacebookIcon className={css.socialIcon} width={30} height={30} />
            </a>
          </li>
          <li>
            <a
              className={css.socialIconLink}
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="instagram"
            >
              <InstagramIcon
                className={css.socialIcon}
                width={26}
                height={30}
              />
            </a>
          </li>
          <li>
            <a
              className={css.socialIconLink}
              href="https://www.yelp.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="yelp"
            >
              <YelpIcon className={css.socialIcon} width={23} height={30} />
            </a>
          </li>
        </ul>
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
