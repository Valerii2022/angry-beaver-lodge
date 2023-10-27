import css from './Order.module.css';
import logo from '../../images/logo.avif';

const Order = () => {
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

export default Order;
