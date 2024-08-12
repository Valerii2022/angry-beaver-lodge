import css from './GrouporderModal.module.css';
import icons from '../../../images/icons.svg';

const GroupModal = () => {
  return (
    <div className={css.container}>
      <div className={css.titleWrapper}>
        <p className={css.title}>Share this link with your guests</p>
        <p className={css.description}>
          Order with your team! You invite guests, they add their meals to the
          order, and you check out. It's that simple!
        </p>
      </div>
      <label className={css.label}>
        <input type="text" className={css.input} />
        <button className={css.filesBtn}>
          <svg width={18} height={18} className={css.icon}>
            <use href={`${icons}#files`} />
          </svg>
        </button>
      </label>
      <div>
        <p>$30.00 order limit per guest</p>
        <button className={css.changeBtn}>
          <svg width={14} height={18} className={css.icon}>
            <use href={`${icons}#pencil`} />
          </svg>
          <span>change</span>
        </button>
      </div>
      <div>
        <p>
          Start a group order, then share the link provided. You can continue
          adding food to your cart. When your guests submit their order, you
          will see their items in your cart.
        </p>
        <p>
          If you need to invite more people you can always open this window
          again.
        </p>
      </div>
      <button className={css.helpBtn}>
        <span className={css.helpIcon}>?</span>
        <span>Help</span>
      </button>
    </div>
  );
};

export default GroupModal;
