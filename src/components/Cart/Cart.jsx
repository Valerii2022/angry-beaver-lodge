import css from './Cart.module.css';

const Cart = ({ mobileOpening }) => {
  return (
    <div>
      <div className={css.cart}>
        <p>Your cart is empty.</p>
        <ul>
          <li>
            <button onClick={() => mobileOpening(false)}>Close cart</button>
          </li>
          <li>
            <button>Checkout $0.00</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cart;
