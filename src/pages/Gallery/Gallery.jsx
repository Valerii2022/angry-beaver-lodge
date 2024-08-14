import Title from 'components/Title/Title';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGallery } from 'redux/operations';
import { getImages } from 'redux/selectors';
import css from './Gallery.module.css';
import Loader from 'components/Loader/Loader';

const Gallery = () => {
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const images = useSelector(getImages);

  const fetchImages = useCallback(async () => {
    setloading(true);
    const { payload } = await dispatch(getGallery());
    if (typeof payload !== 'object') {
      setError(true);
    }
    setloading(false);
  }, [dispatch]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return (
    <div className={css.container}>
      <section className={css.titleWrap}>
        <Title title="Gallery" />
      </section>
      <section className={css.gallery}>
        {loading ? (
          <div className={css.loaderWrapper}>
            <Loader />
          </div>
        ) : (
          <div>
            {images && images.length !== 0 ? (
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
            ) : (
              <div className={css.errorMessage}>
                <p>
                  {error
                    ? 'Sorry, we have technical problems.'
                    : 'Sorry, we have no images in our gallery.'}
                </p>
                <p>Please, try again later.</p>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default Gallery;
