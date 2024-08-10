import Hero from 'components/Hero/Hero';
import HomeGallery from 'components/HomePageGallery/HomePageGallery';
import About from 'components/AboutSection/About';
import Social from 'components/SocialSection/Social';
import Contacts from 'components/Contacts/Contacts';
import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.container}>
      <Hero />
      <HomeGallery />
      <About />
      <Social />
      <Contacts />
    </div>
  );
};

export default Home;
