import css from './HomePageGallery.module.css';

const HomeGallery = () => {
  return (
    <section className={css.gallery}>
      <ul className={css.galleryList}>
        <li
          className={css.galleryItem}
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dqyjr9t6r/image/upload/v1723270030/beaver/home/home1_z8gvlb.avif')",
          }}
        ></li>
        <li
          className={css.galleryItem}
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dqyjr9t6r/image/upload/v1723270029/beaver/home/home2_asxu31.avif')",
          }}
        ></li>
        <li
          className={`${css.galleryItem} ${css.galleryLastRow}`}
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dqyjr9t6r/image/upload/v1723270029/beaver/home/home3_i5exrc.avif')",
          }}
        ></li>
      </ul>
    </section>
  );
};

export default HomeGallery;
