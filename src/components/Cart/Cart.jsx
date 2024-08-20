import css from './Cart.module.css';
import cards from '../../images/cards.webp';
import { useSelector } from 'react-redux';
import { getItems } from 'redux/selectors';
import { nanoid } from 'nanoid';

const Cart = ({ mobileOpening }) => {
  const cartItems = useSelector(getItems);

  const subtotal = cartItems.reduce((acc, item) => {
    return acc + parseFloat(item.price);
  }, 0);

  return (
    <div className={css.cart}>
      <div className={css.content}>
        {cartItems.length !== 0 ? (
          <div className={css.orderListWrapper}>
            <h2>Your Items</h2>
            <ul>
              {cartItems.map(el => {
                return (
                  <li key={nanoid()}>
                    <p>
                      <span>{el.quantity}</span>x<span>{el.title}</span>
                      <span>${el.price.toFixed(2)}</span>
                    </p>
                  </li>
                );
              })}
            </ul>
            <ul>
              <li>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </li>
              <li>
                <span>Convenience Fee</span>
                <span>${(subtotal * 0.08).toFixed(2)}</span>
              </li>
              <li>
                <span>Estimated Tax</span>
                <span>${(subtotal * 0.07).toFixed(2)}</span>
              </li>
              <li>
                <span>Total</span>
                <span>${(subtotal * 1.15).toFixed(2)}</span>
              </li>
            </ul>
          </div>
        ) : (
          <div className={css.emptyWrapper}>
            <p className={css.emptyText}>Your cart is empty.</p>
            <img src={cards} alt="Logo" />
          </div>
        )}
      </div>
      <ul className={css.btnList}>
        <li className={css.closeBtnWrapper}>
          <button
            className={css.closeBtn}
            onClick={() => {
              document.body.classList.remove('lock');
              mobileOpening(false);
            }}
          >
            Close Cart
          </button>
        </li>
        <li className={css.checkoutBtnWrapper}>
          <button className={css.checkoutBtn}>
            Your Order ${subtotal * 1.11}
          </button>
        </li>
        <li className={css.cancelBtnWrapper}>
          <button className={css.cancelBtn}>
            <span>Cancel</span>
          </button>
        </li>
        <li className={css.submitBtnWrapper}>
          <button className={css.submitBtn}>
            <span>Submit</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Cart;
