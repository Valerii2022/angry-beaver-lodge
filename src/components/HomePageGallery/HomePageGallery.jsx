import css from './HomePageGallery.module.css';

const HomeGallery = () => {
  return (
    <section className={css.gallery}>
      <ul className={css.galleryList}>
        <li className={`${css.galleryItem} ${css.galleryFirst}`}></li>
        <li className={`${css.galleryItem} ${css.gallerySecond}`}></li>
        <li className={`${css.galleryItem} ${css.galleryThird}`}></li>
      </ul>
    </section>
  );
};

export default HomeGallery;
