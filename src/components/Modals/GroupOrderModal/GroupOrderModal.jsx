import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import icons from '../../../images/icons.svg';
import { getGuestLimit, getOrderId } from 'redux/selectors';
import { updateOrder } from 'redux/operations';
import Loader from 'components/Loader/Loader';
import css from './GrouporderModal.module.css';

const GroupModal = () => {
  const guestLimit = useSelector(getGuestLimit);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState(false);
  const [change, setChange] = useState(true);
  const [limit, setLimit] = useState('none');
  const [serverError, setServerError] = useState(false);

  const orderId = useSelector(getOrderId);
  const dispatch = useDispatch();

  useEffect(() => {
    setUrl(window.location.href);

    if (guestLimit === 'none' || guestLimit === 'No') {
      setLimit('No');
    } else {
      setLimit(guestLimit);
    }
  }, [guestLimit]);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(`${url}/${orderId}`)
      .then(() => {
        setMessage(true);
        setTimeout(() => setMessage(false), 5000);
      })
      .catch(err => {
        console.error('Error: ', err);
      });
  };

  const handleLimitChange = e => {
    setServerError(false);
    setLimit(e.target.id);
  };

  const handleLimitFormSubmit = async e => {
    e.preventDefault();
    const order = { limitPerGuest: limit };

    setLoading(true);

    const { payload } = await dispatch(updateOrder({ orderId, order }));

    if (typeof payload !== 'object') {
      setServerError(true);
    } else {
      setChange(true);
    }

    setLoading(false);
  };

  return (
    <div className={css.container}>
      {guestLimit !== 'none' && (
        <>
          <div className={css.titleWrapper}>
            <p className={css.title}>Share this link with your guests</p>
            <p className={css.description}>
              Order with your team! You invite guests, they add their meals to
              the order, and you check out. It's that simple!
            </p>
          </div>
          <label className={css.label}>
            <div onClick={copyToClipboard} className={css.inputWrapper}></div>
            <input
              type="text"
              className={css.input}
              disabled
              placeholder={`${url}/${orderId}`}
            />
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
        </>
      )}
      <div className={css.limit}>
        {guestLimit === 'none' || !change ? (
          <form
            className={css.limitChooseBlock}
            onSubmit={handleLimitFormSubmit}
          >
            <p className={css.title}>Order limit per guest</p>
            <ul className={css.limitList}>
              <li onClick={handleLimitChange}>
                <input id="No" type="radio" name="limit" defaultChecked />
                <label htmlFor="No" className={css.limitLabel}>
                  No limit
                </label>
              </li>
              <li onClick={handleLimitChange}>
                <input
                  id="$25"
                  type="radio"
                  name="limit"
                  defaultChecked={limit === '$25'}
                />
                <label htmlFor="$25" className={css.limitLabel}>
                  $25
                </label>
              </li>
              <li onClick={handleLimitChange}>
                <input
                  id="$40"
                  type="radio"
                  name="limit"
                  defaultChecked={limit === '$40'}
                />
                <label htmlFor="$40" className={css.limitLabel}>
                  $40
                </label>
              </li>
              <li onClick={handleLimitChange}>
                <input
                  id="$50"
                  type="radio"
                  name="limit"
                  defaultChecked={limit === '$50'}
                />
                <label htmlFor="$50" className={css.limitLabel}>
                  $50
                </label>
              </li>
              <li className={css.custom} onClick={handleLimitChange}>
                <input
                  id="$100"
                  type="radio"
                  name="limit"
                  defaultChecked={limit === '$100'}
                />
                <label htmlFor="$100" className={css.limitLabel}>
                  $100
                </label>
              </li>
            </ul>
            <button className={css.updateLimitBtn}>
              {loading ? (
                <Loader modal={true} />
              ) : guestLimit === 'none' ? (
                'Start Group Order'
              ) : (
                'Update Group Order'
              )}
            </button>
          </form>
        ) : (
          <div className={css.openChangeBlock}>
            <p>{limit} order limit per guest</p>
            <button className={css.changeBtn} onClick={() => setChange(false)}>
              <svg width={14} height={18} className={css.icon}>
                <use href={`${icons}#pencil`} />
              </svg>
              <span>change</span>
            </button>
          </div>
        )}
      </div>
      <div>
        <p className={css.textTop}>
          Start a group order, then share the link provided. You can continue
          adding food to your cart. When your guests submit their order, you
          will see their items in your cart.
        </p>
        <p className={css.textBottom}>
          If you need to invite more people you can always open this window
          again.
        </p>
      </div>
      <div className={css.bottomWrapper}>
        {serverError && <p className={css.errorMessage}>* Server error</p>}
        <a
          href="https://support.menufy.com/hc/en-us/articles/360044057712-Group-Ordering"
          target="_blank"
          rel="noopener noreferrer"
          className={css.helpBtn}
        >
          <span className={css.helpIcon}>?</span>
          <span>Help</span>
        </a>
      </div>
    </div>
  );
};

export default GroupModal;
