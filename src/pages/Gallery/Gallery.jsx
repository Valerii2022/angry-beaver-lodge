import css from './Gallery.module.css';
import logo from '../../images/logo.avif';

const Gallery = () => {
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
        <div className={css.galleryInner}>
          <div className={`${css.item} ${css.half1}`}>1</div>
          <div className={`${css.item} ${css.half2}`}>2</div>
          <div className={`${css.item} ${css.half3}`}>3</div>
          <div className={`${css.item} ${css.half4}`}>4</div>
          <div className={`${css.item} ${css.half5}`}>5</div>
          <div className={`${css.item} ${css.half6}`}>6</div>
          <div className={`${css.item} ${css.half7}`}>7</div>
          <div className={`${css.item} ${css.half8}`}>8</div>
          <div className={`${css.item} ${css.half9}`}>9</div>
          <div className={`${css.item} ${css.half10}`}>10</div>
          <div className={`${css.item} ${css.half11}`}>11</div>
          <div className={`${css.item} ${css.half12}`}>12</div>
          <div className={`${css.item} ${css.half13}`}>13</div>
          <div className={`${css.item} ${css.half14}`}>14</div>
          <div className={`${css.item} ${css.half15}`}>15</div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
