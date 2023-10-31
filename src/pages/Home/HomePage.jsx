import { NavLink } from 'react-router-dom';
import css from './Home.module.css';
import logo from '../../images/logo.avif';
import { ReactComponent as FacebookIcon } from '../../images/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../images/instagram.svg';
import { ReactComponent as YelpIcon } from '../../images/yelp.svg';
import { ReactComponent as RoadSign } from '../../images/road.svg';
import { ReactComponent as Phone } from '../../images/phone.svg';

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
      <section className={css.contacts}>
        <div className={css.contactInner}>
          <div className={css.contactsInfo}>
            <h2 className={css.title}>The Angry Beaver Lodge</h2>
            <p className={css.contactDescription}>
              At The Angry Beaver Lodge, you can find a variety of American
              cuisine such as sandwiches, burgers, salads, steaks, and more. We
              are conveniently located on 88th St and 4th St, near Dickey County
              Heritage Center. Order online for carryout!
            </p>
            <h3 className={css.subtitle}>Cuisines</h3>
            <ul className={css.benefitsList}>
              <li>American</li>
              <li>Hamburgers</li>
              <li>Sandwiches</li>
              <li>Steak</li>
            </ul>
            <h3 className={css.subtitle}>Atmosphere</h3>
            <ul className={css.benefitsList}>
              <li>Casual Dining</li>
              <li>Good For Group</li>
              <li>Good For Kids</li>
            </ul>
            <h3 className={css.subtitle}>Food Types</h3>
            <ul className={css.benefitsList}>
              <li>Comfort Food</li>
              <li>Kids Menu</li>
            </ul>
            <h3 className={css.subtitle}>Service Options</h3>
            <ul className={css.benefitsList}>
              <li>Full Bar</li>
              <li>Happy Hour</li>
              <li>Has TV</li>
              <li>Private Room</li>
            </ul>
            <address>
              <ul className={css.addressList}>
                <li>
                  <a
                    className={css.addressLink}
                    href="https://maps.app.goo.gl/N7b2EEKPf1eH4ogJ6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RoadSign width={22} height={24} />
                    <p>404 MAIN AVE </p>
                    <p>OAKES, ND 58474</p>
                  </a>
                </li>

                <li>
                  <a
                    className={css.addressLink}
                    href="tel:+7017423458"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone width={16} height={16} />
                    <p>(701) 742-3458</p>
                  </a>
                </li>
              </ul>
            </address>
            <div className={css.hoursWrapper}>
              <div>
                <h3 className={css.subtitle}>Business Hours</h3>
                <div className={css.hoursInner}>
                  <div>
                    <p className={css.text}>Mon - Sat:</p>
                    <p>Sun:</p>
                  </div>
                  <div>
                    <p className={css.text}>5:00 PM - 2:00 AM</p>
                    <p>Closed</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className={css.subtitle}>Carryout Hours</h3>
                <div className={css.hoursInner}>
                  <div>
                    <p className={css.text}>Mon - Sat:</p>
                    <p>Sun:</p>
                  </div>
                  <div>
                    <p className={css.text}>5:00 PM - 10:30 AM</p>
                    <p>Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={css.mapWrapper}></div>
        </div>
      </section>
    </main>
  );
};

export default Home;
