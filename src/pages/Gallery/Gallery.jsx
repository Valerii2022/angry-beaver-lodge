import { useSelector } from 'react-redux';
import { getImages } from 'redux/selectors';
import Title from 'components/Title/Title';
import css from './Gallery.module.css';

const Gallery = () => {
  const images = useSelector(getImages);

  return (
    <div className={css.container}>
      <section className={css.titleWrap}>
        <Title title="Gallery" />
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
