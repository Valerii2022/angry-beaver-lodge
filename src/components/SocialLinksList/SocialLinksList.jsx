import icons from '../../images/icons.svg';
import css from './SocialLinksList.module.css';

const SocialLinks = () => {
  return (
    <ul className={css.socialIconList}>
      <li>
        <a
          className={css.socialIconLink}
          href="https://uk-ua.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="facebook"
        >
          <svg className={css.socialIcon} width={32} height={32}>
            <use href={`${icons}#facebook`} />
          </svg>
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
          <svg className={css.socialIcon} width={26} height={30}>
            <use href={`${icons}#instagram`} />
          </svg>
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
          <svg className={css.socialIcon} width={23} height={30}>
            <use href={`${icons}#yelp`} />
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
