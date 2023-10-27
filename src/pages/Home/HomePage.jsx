import { NavLink } from 'react-router-dom';
import css from './Home.module.css';
import logo from '../../images/logo.avif';

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
    </main>
  );
};

export default Home;
