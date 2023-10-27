import css from './Contact.module.css';
import logo from '../../images/logo.avif';

const Contact = () => {
  return (
    <section className={css.container}>
      <div className={css.sectionHeader}>
        <img
          src={logo}
          alt="Logo"
          className={css.logo}
          width={147}
          height={85}
        />
      </div>
    </section>
  );
};

export default Contact;
