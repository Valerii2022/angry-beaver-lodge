import css from './GrouporderModal.module.css';
import icons from '../../../images/icons.svg';
import { useEffect, useState } from 'react';

const GroupModal = () => {
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState(false);
  const [change, setChange] = useState(false);
  const [limit, setLimit] = useState('No');

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setMessage(true);
        setTimeout(() => setMessage(false), 5000);
      })
      .catch(err => {
        console.error('Error: ', err);
      });
  };

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
        <input type="text" className={css.input} disabled placeholder={url} />
        <button className={css.filesBtn} onClick={copyToClipboard}>
          <svg width={18} height={18} className={css.icon}>
            <use href={`${icons}#files`} />
          </svg>
        </button>
        <div
          className={
            message ? css.copyMessage : `${css.hidden} ${css.copyMessage}`
          }
        >
          <p>Group Order Link</p>
          <p>Link copied to your clipboard!</p>
        </div>
      </label>
      <div className={css.limit}>
        <div className={change ? css.hidden : css.openChangeBlock}>
          <p>{limit} order limit per guest</p>
          <button className={css.changeBtn} onClick={() => setChange(true)}>
            <svg width={14} height={18} className={css.icon}>
              <use href={`${icons}#pencil`} />
            </svg>
            <span>change</span>
          </button>
        </div>
        <form className={change ? css.limitChooseBlock : css.hidden}>
          <p className={css.title}>Order limit per guest</p>
          <ul className={css.limitList}>
            <li>
              <input
                id="no"
                type="radio"
                name="limit"
                onChange={() => setLimit('No')}
              />
              <label htmlFor="no" className={css.limitLabel}>
                No limit
              </label>
            </li>
            <li>
              <input
                id="10"
                type="radio"
                name="limit"
                onChange={() => setLimit('$10')}
              />
              <label htmlFor="10" className={css.limitLabel}>
                $10
              </label>
            </li>
            <li>
              <input
                id="20"
                type="radio"
                name="limit"
                onChange={() => setLimit('$20')}
              />
              <label htmlFor="20" className={css.limitLabel}>
                $20
              </label>
            </li>
            <li>
              <input
                id="30"
                type="radio"
                name="limit"
                onChange={() => setLimit('$30')}
              />
              <label htmlFor="30" className={css.limitLabel}>
                $30
              </label>
            </li>
            <li>
              <input
                id="custom"
                type="radio"
                name="limit"
                onChange={e => {
                  setLimit('$10');
                }}
              />
              <label htmlFor="custom" className={css.limitLabel}>
                Custom
              </label>
            </li>
          </ul>
          <button
            className={css.updateLimitBtn}
            onClick={e => {
              e.preventDefault();
              setChange(false);
            }}
          >
            Update Group Order
          </button>
        </form>
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
