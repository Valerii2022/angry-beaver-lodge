import Title from 'components/Title/Title';
import css from './Gallery.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGallery } from 'redux/operations';
import { getImages } from 'redux/selectors';

const Gallery = () => {
  const dispatch = useDispatch();
  const images = useSelector(getImages);

  useEffect(() => {
    dispatch(getGallery());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <section className={css.titleWrap}>
        <Title title="Gallery" />
      </section>
      <section className={css.gallery}>
        {images && images.length !== 0 && (
          <ul className={css.galleryInner}>
            {images.map(elem => {
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
        )}
      </section>
    </div>
  );
};

export default Gallery;
