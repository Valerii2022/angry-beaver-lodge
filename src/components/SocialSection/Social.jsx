import Title from 'components/Title/Title';
import SocialLinks from 'components/SocialLinksList/SocialLinksList';
import css from './Social.module.css';

const Social = () => {
  return (
    <section className={css.socialLinksWpapper}>
      <Title
        title={`Check us out on social media for upcoming events, specials, and other
        fun things we've got going on!`}
      />
      <div className={css.socialWrapper}>
        <SocialLinks />
      </div>
    </section>
  );
};

export default Social;
