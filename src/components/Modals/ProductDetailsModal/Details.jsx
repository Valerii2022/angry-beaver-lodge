import { useState } from 'react';
import css from './Details.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentGuest, getOrderDetails } from 'redux/selectors';
import Loader from 'components/Loader/Loader';
import { updateOrder } from 'redux/operations';
import { nanoid } from 'nanoid';

const Details = ({ item, closeModal }) => {
  const { items, _id: orderId, total, guests } = useSelector(getOrderDetails);
  const currentGuest = useSelector(getCurrentGuest);
  const dispatch = useDispatch();

  const [price, setPrice] = useState(parseFloat(item.price));
  const [quantity, setQuantity] = useState(1);
  const [instructions, setInstructions] = useState('');
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(false);
  const totalPrice = (parseFloat(total) + 1.15 * price).toFixed(2);

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

  const handleGuestLimitLogic = (guests, id) => {
    const current = guests.filter(el => el.id === id);
    if (current.length !== 0) {
      const updatedGuests = guests.map(guest => {
        if (guest.id === id) {
          const total = (parseFloat(guest.guestTotal) + price)
            .toFixed(2)
            .toString();
          return { id: guest.id, guestTotal: total };
        }
        return guest;
      });
      return updatedGuests;
    } else {
      return [...guests, { id, guestTotal: item.price }];
    }
  };

  const handleAddedToCart = async () => {
    setLoading(true);

    const order = {
      items: [
        {
          id: nanoid(6),
          title: item.title,
          quantity,
          price,
          instructions,
          owner: currentGuest,
        },
        ...items,
      ],
      guests: handleGuestLimitLogic(guests, currentGuest),
      total: totalPrice,
    };

    const { payload } = await dispatch(updateOrder({ orderId, order }));

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
      <p className={css.description}>{item.description}</p>
      <div className={css.modalSection}>
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
        <button className={css.submitBtn} onClick={handleAddedToCart}>
          {loading ? (
            <Loader modal={true} />
          ) : (
            <span className={css.submitText}>Add to Cart</span>
          )}
          {!loading && <span>${price.toFixed(2)}</span>}
        </button>
      </div>
    </div>
  );
};

export default Details;
