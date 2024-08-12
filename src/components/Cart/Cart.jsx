import css from './Cart.module.css';
import cards from '../../images/cards.png';

const Cart = ({ mobileOpening }) => {
  const cart = [];

  return (
    <div className={css.cart}>
      <div className={css.content}>
        {cart.length !== 0 ? (
          <div>
            <h2>Your Items</h2>
          </div>
        ) : (
          <div className={css.emptyWrapper}>
            <p className={css.emptyText}>Your cart is empty.</p>
            <img src={cards} alt="Logo" />
          </div>
        )}
      </div>
      <ul className={css.btnList}>
        <li>
          <button
            className={css.closeBtn}
            onClick={() => {
              document.body.classList.remove('lock');
              mobileOpening(false);
            }}
          >
            Close cart
          </button>
        </li>
        <li>
          <button className={css.checkoutBtn}>
            <span>Checkout</span> <span>$0.00</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Cart;
