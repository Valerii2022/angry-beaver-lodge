import css from './Contact.module.css';
import logo from '../../images/logo.avif';
import { ReactComponent as RoadSign } from '../../images/road.svg';
import { ReactComponent as Phone } from '../../images/phone.svg';

const Contact = () => {
  return (
    <div>
      <section className={css.container}>
        <div className={css.sectionHeader}>
          <img src={logo} alt="Logo" width={147} height={85} />
        </div>
      </section>
      <section className={css.titleWrap}>
        <h2 className={css.title}>Have a Question? Contact Us!</h2>
      </section>
      <section className={css.formContainer}>
        <img className={css.logo} src={logo} alt="logo" />
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
            <div className={css.mapWrapper}></div>
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
          <div className={css.formWrapper}>
            <h2 className={css.title}>Get In Touch</h2>
            <form className={css.form}>
              <label className={css.label}>
                Name *
                <input type="text" name="name" />
              </label>
              <label className={css.label}>
                Email *
                <input type="text" name="email" />
              </label>
              <label className={css.label}>
                Phone *
                <input type="text" name="phone" />
              </label>
              <label className={css.label}>
                Message *
                <textarea type="text" name="medsage" />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
