import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.avif';
import css from './Hero.module.css';

const Hero = () => {
  return (
    <section className={css.hero}>
      <div className={css.contentWrap}>
        <img className={css.logo} src={logo} alt="logo" />
        <NavLink className={css.link} to="/order">
          Start Your Order
        </NavLink>
      </div>
    </section>
  );
};

export default Hero
