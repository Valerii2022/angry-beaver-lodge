import css from './Social.module.css';
import { ReactComponent as FacebookIcon } from '../../images/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../images/instagram.svg';
import { ReactComponent as YelpIcon } from '../../images/yelp.svg';

const Social = () => {
  return (
    <section className={css.socislLinks}>
      <h2 className={css.title}>
        Check us out on social media for upcoming events, specials, and other
        fun things we've got going on!
      </h2>
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
            <InstagramIcon className={css.socialIcon} width={26} height={30} />
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
    </section>
  );
};

export default Social;
