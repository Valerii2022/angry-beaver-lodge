import css from './Cart.module.css';
import cards from '../../images/cards.webp';
import { useDispatch, useSelector } from 'react-redux';
import { getItems, getOrderId } from 'redux/selectors';
import icons from '../../images/icons.svg';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import { removeOrder } from 'redux/operations';
import Modal from 'components/Modals/Modal/Modal';

const Cart = ({ mobileOpening }) => {
  const cartItems = useSelector(getItems);
  const orderId = useSelector(getOrderId);

  const dispatch = useDispatch();

  const [cancelLoading, setCancelLoading] = useState(false);
  const [cancelModalOpening, setCancelModalOpening] = useState(false);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [checkoutModalOpening, setCheckoutModalOpening] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [workingDaysStatus, setWorkingDaysStatus] = useState(true);
  const [workingHoursStatus, setWorkingHoursStatus] = useState(true);
  const [date, setDate] = useState('');

  useEffect(() => {
    const now = new Date();
    const utcHour = now.getUTCHours();
    const utcMinutes = now.getUTCMinutes();
    const hours = (utcHour - 5 + 24) % 24;
    const day = now.getUTCDay();

    if (day === 0) {
      setDate(`${now.getMonth() + 2}/${now.getDate()}`);
      setWorkingDaysStatus(false);
    } else {
      setDate(`${now.getMonth() + 1}/${now.getDate()}`);
      setWorkingDaysStatus(true);
    }

    const isWithinTimeRange =
      (hours > 17 || (hours === 17 && utcMinutes >= 0)) &&
      (hours < 22 || (hours === 22 && utcMinutes <= 30));

    if (!isWithinTimeRange) {
      setWorkingHoursStatus(false);
    } else {
      setWorkingHoursStatus(true);
    }
  }, []);

  const handleCancelOrder = async () => {
    setCancelLoading(true);
    const { payload } = await dispatch(removeOrder(orderId));
    if (typeof payload !== 'object') {
      setServerError(true);
    }
    setCancelLoading(false);
    setCancelModalOpening(false);
    setTimeout(() => {
      setServerError(false);
    }, 3000);
  };

  const handleCheckoutOrder = async () => {
    setCheckoutLoading(true);
    setCheckoutLoading(false);
    setCheckoutModalOpening(true);
  };

  const handleRemoveItemFromCart = id => {
    console.log(id);
  };

  const subtotal = cartItems.reduce((acc, item) => {
    return acc + parseFloat(item.price);
  }, 0);

  return (
    <>
      <div className={css.cart}>
        <div className={css.content}>
          {cartItems.length !== 0 ? (
            <div className={css.orderListWrapper}>
              {!workingHoursStatus && (
                <p className={css.warning}>
                  We apologize, we are not currently accepting carryout/delivery
                  orders until {workingDaysStatus ? 'Today' : 'Tomorrow'},{' '}
                  {date} 5:00 PM
                </p>
              )}
              <h2 className={css.title}>Your Items</h2>
              <ul className={css.cartList}>
                {cartItems.map(el => {
                  return (
                    <li key={el.id} className={css.cartItem}>
                      <div className={css.itemTitleWrapper}>
                        <span
                          className={css.itemTitle}
                        >{`${el.quantity} x ${el.title}`}</span>
                        <span>${el.price.toFixed(2)}</span>
                        
                            <svg
                              id={el.id}
                              className={css.icon}
                              width={16}
                              height={16}
                              onClick={e =>
                                handleRemoveItemFromCart(e.currentTarget.id)
                              }
                            >
                              <use href={`${icons}#remove`} />
                            </svg>
                          
                      </div>
                      {el.instructions && (
                        <ul>
                          <li className={css.instructions}>
                            + Special Instructions
                          </li>
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
              <ul className={css.totalPriceSection}>
                <li>
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </li>
                <li>
                  <span>Convenience Fee:</span>
                  <span>${(subtotal * 0.08).toFixed(2)}</span>
                </li>
                <li>
                  <span>Estimated Tax:</span>
                  <span>${(subtotal * 0.07).toFixed(2)}</span>
                </li>
                <li>
                  <span>Total:</span>
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
              Close
            </button>
          </li>
          <li className={css.checkoutBtnWrapper}>
            <button className={css.checkoutBtn} onClick={handleCheckoutOrder}>
              {checkoutLoading ? (
                <Loader modal={true} />
              ) : (
                <>
                  <span>Checkout</span>
                  <span>${(subtotal * 1.15).toFixed(2)}</span>
                </>
              )}
            </button>
          </li>
          <li className={css.cancelBtnWrapper}>
            <button
              className={css.cancelBtn}
              onClick={() => setCancelModalOpening(true)}
            >
              Cancel
            </button>
          </li>
        </ul>
      </div>
      {cancelModalOpening && (
        <Modal modalIsOpen={setCancelModalOpening} title="Warning">
          <p className={css.warningMessage}>
            Are you sure you want to cancel the order?
          </p>
          <div className={css.cancelBtnsWrapper}>
            <button
              className={css.noButton}
              onClick={() => setCancelModalOpening(false)}
            >
              No
            </button>
            <button className={css.cancelBtn} onClick={handleCancelOrder}>
              <span>
                {cancelLoading ? <Loader modal={true} /> : 'Yes, Cancel'}
              </span>
            </button>
            {serverError && <p className={css.errorMessage}>* Server error</p>}
          </div>
        </Modal>
      )}
      {checkoutModalOpening && (
        <Modal modalIsOpen={setCheckoutModalOpening} title="Thank You!">
          <p className={css.warningMessage}>Thank you for your order!</p>
          <p className={css.successMessageMessage}>
            Your order number is: <span>{orderId}</span>
          </p>
        </Modal>
      )}
    </>
  );
};

export default Cart;
