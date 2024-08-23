import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addItem } from 'redux/operations';
import {
  getCurrentGuest,
  getCurrentGuestName,
  getGuestLimit,
  getOrderDetails,
} from 'redux/selectors';
import Loader from 'components/Loader/Loader';
import css from './Details.module.css';

const Details = ({ item, closeModal }) => {
  const { _id: orderId, guests } = useSelector(getOrderDetails);
  const groupOrder = useSelector(getGuestLimit);
  const currentGuestId = useSelector(getCurrentGuest);
  const currentGuestName = useSelector(getCurrentGuestName);
  const dispatch = useDispatch();

  const currentGuest = guests.find(el => el.id === currentGuestId);
  const limit = parseFloat(groupOrder.replace('$', ''));

  const [price, setPrice] = useState(parseFloat(item.price));
  const [quantity, setQuantity] = useState(1);
  const [instructions, setInstructions] = useState('');
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(false);

  const handleQuantity = option => {
    if (quantity === 1 && option === 'decrease') {
      return;
    }
    if (option === 'decrease') {
      setQuantity(quantity - 1);
      setPrice(price - parseFloat(item.price));
    } else {
      setQuantity(quantity + 1);
      setPrice(price + parseFloat(item.price));
    }
  };

  const handleAddedToCart = async () => {
    setLoading(true);

    const order = {
      item: {
        id: nanoid(6),
        title: item.title,
        quantity,
        price,
        instructions,
        guestName: currentGuestName,
        guestId: currentGuestId,
      },
    };
    const { payload } = await dispatch(addItem({ orderId, order }));

    if (typeof payload !== 'object') {
      setServerError(true);
    } else {
      closeModal(false);
    }
    setTimeout(() => {
      setServerError(false);
    }, 3000);
    setLoading(false);
  };

  return (
    <div className={css.container}>
      <div className={css.topWrapper}>
        {item.image && (
          <div className={css.imageWrapper}>
            <img
              className={css.image}
              src={item.image}
              alt={item.description}
            />
          </div>
        )}
        <p className={css.description}>{item.description}</p>
        <div>
          <p className={css.title}>Quantity</p>
          <div className={css.optionsWrapper}>
            <button
              className={
                quantity === 1
                  ? `${css.optionBtn} ${css.disabled}`
                  : css.optionBtn
              }
              onClick={() => handleQuantity('decrease')}
            >
              --
            </button>
            <p className={css.optionText}>{quantity}</p>
            <button
              className={css.optionBtn}
              onClick={() => handleQuantity('increase')}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className={css.modalSection}>
        <p className={css.title}>Special Instructions</p>
        <label>
          <textarea
            value={instructions}
            onChange={e => setInstructions(e.target.value)}
            name="instructions"
            className={css.instructions}
            placeholder="Food allergy? Need something put to the side? Let us know.
            (additional charges may apply and not all changes are possible)"
          />
        </label>
      </div>
      <div className={css.buttonWrapper}>
        {serverError && <p className={css.errorMessage}>* Server error</p>}
        {currentGuestName &&
        currentGuest &&
        currentGuest.guestTotal + price - limit > 0 ? (
          <button className={css.overLimitBtn}>Over Limit</button>
        ) : (
          <button className={css.submitBtn} onClick={handleAddedToCart}>
            {loading ? (
              <Loader modal={true} />
            ) : (
              <span className={css.submitText}>Add to Cart</span>
            )}
            {!loading && <span>${price.toFixed(2)}</span>}
          </button>
        )}
      </div>
    </div>
  );
};

export default Details;
