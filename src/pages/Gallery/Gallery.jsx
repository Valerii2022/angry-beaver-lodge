import css from './Gallery.module.css';
import logo from '../../images/logo.avif';
import { useSelector } from 'react-redux';
import { getImages } from 'redux/selectors';

const Gallery = () => {
  const images = useSelector(getImages);

  return (
    <div>
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
      <section className={css.titleWrap}>
        <h2 className={css.title}>Gallery</h2>
      </section>
      <section className={css.gallery}>
        <ul className={css.galleryInner}>
          {images &&
            images.map(elem => {
              return (
                <li
                  id={css[`${elem.id}`]}
                  key={elem.id}
                  style={{
                    backgroundImage: `url(${elem.backgroundImage})`,
                  }}
                  className={css.item}
                ></li>
              );
            })}
        </ul>
      </section>
    </div>
  );
};

export default Gallery;
