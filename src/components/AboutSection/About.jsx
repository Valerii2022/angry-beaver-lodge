import Title from 'components/Title/Title';
import css from './About.module.css';

const About = () => {
  return (
    <section className={css.aboutUs}>
      <Title title="About Us" />
      <p className={css.aboutText}>
        The Angry Beaver Lodge has been the cornerstone of Oakes Main Street for
        over 20 years. The unusual name stems from owner Shawn Ulmer’s three
        sons’ favorite cartoon and reflects the relaxed, fun atmosphere inside.
        But one thing we’re serious about around here is the food. Whether
        you’re having a juicy steak grilled to perfection, our award-winning
        ribs, or our signature double double burger- there’s no doubt you’re
        going to be glad you had dinner with us tonight!
      </p>
    </section>
  );
};

export default About;
