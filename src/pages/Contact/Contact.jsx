import logo from '../../images/logo.avif';
import Title from 'components/Title/Title';
import Form from 'components/ContactForm/ContactForm';
import Address from 'components/Address/Address';
import Schedule from 'components/WorkingHours/Schedule';
import css from './Contact.module.css';

const Contact = () => {
  return (
    <div className={css.container}>
      <div className={css.titleWrap}>
        <Title title="Have a Question? Contact Us!" />
      </div>
      <section className={css.formContainer}>
        <img className={css.logo} src={logo} alt="logo" />
        <div className={css.contactInner}>
          <div className={css.contactsInfo}>
            <Title title="The Angry Beaver Lodge" />
            <div className={css.addressWrapper}>
              <Address />
            </div>
            <a
              href="https://maps.app.goo.gl/N7b2EEKPf1eH4ogJ6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={css.mapWrapper}></span>
            </a>
            <Schedule />
          </div>
          <div className={css.formWrapper}>
            <Title title="Get In Touch" />
            <Form />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
