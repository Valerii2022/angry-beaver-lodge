import css from './Contact.module.css';
import logo from '../../images/logo.avif';
import Title from 'components/Title/Title';
import Form from 'components/ContactForm/ContactForm';
import Address from 'components/Address/Address';
import Schedule from 'components/WorkingHours/Schedule';

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
            <Address />
            <div className={css.mapWrapper}></div>
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
