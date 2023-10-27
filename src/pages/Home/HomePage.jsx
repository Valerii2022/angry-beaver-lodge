import { NavLink } from 'react-router-dom';
import css from './Home.module.css';
import logo from '../../images/logo.avif';
import { ReactComponent as FacebookIcon } from '../../images/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../images/instagram.svg';
import { ReactComponent as YelpIcon } from '../../images/yelp.svg';

const Home = () => {
  return (
    <main className={css.container}>
      <section className={css.hero}>
        <div className={css.contentWrap}>
          <img className={css.logo} src={logo} alt="logo" />
          <NavLink className={css.link} to="/order">
            Start Your Order
          </NavLink>
        </div>
      </section>
      <section className={css.gallery}>
        <ul className={css.galleryList}>
          <li className={css.galleryItemOne}></li>
          <li className={css.galleryItemTwo}></li>
          <li className={css.galleryItemThree}></li>
        </ul>
      </section>
      <section className={css.aboutUs}>
        <h2 className={css.title}>About Us</h2>
        <p className={css.aboutText}>
          The Angry Beaver Lodge has been the cornerstone of Oakes Main Street
          for over 20 years. The unusual name stems from owner Shawn Ulmer’s
          three sons’ favorite cartoon and reflects the relaxed, fun atmosphere
          inside. But one thing we’re serious about around here is the food.
          Whether you’re having a juicy steak grilled to perfection, our
          award-winning ribs, or our signature double double burger- there’s no
          doubt you’re going to be glad you had dinner with us tonight!
        </p>
      </section>
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
      </section>
    </main>
  );
};

export default Home;
