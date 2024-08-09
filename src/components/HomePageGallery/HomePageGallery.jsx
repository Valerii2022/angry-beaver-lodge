import css from './HomePageGallery.module.css';

const HomeGallery = () => {
  return (
    <section className={css.gallery}>
      <ul className={css.galleryList}>
        <li
          className={css.galleryItem}
          style={{
            backgroundImage:
              "url('https://menufyproduction.imgix.net/637568634491647099+456657.png?auto=compress,format&fit=max&w=1024&h=600')",
          }}
        ></li>
        <li
          className={css.galleryItem}
          style={{
            backgroundImage:
              "url('https://menufyproduction.imgix.net/637568634497554194+456658.png?auto=compress,format&fit=max&w=1024&h=600')",
          }}
        ></li>
        <li
          className={`${css.galleryItem} ${css.galleryLastRow}`}
          style={{
            backgroundImage:
              "url('https://menufyproduction.imgix.net/637568634499504283+456659.png?auto=compress,format&fit=max&w=1024&h=600')",
          }}
        ></li>
      </ul>
    </section>
  );
};

export default HomeGallery;
