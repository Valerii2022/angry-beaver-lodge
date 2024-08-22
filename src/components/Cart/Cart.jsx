import css from './Cart.module.css';
import cards from '../../images/cards.webp';
import { useDispatch, useSelector } from 'react-redux';
import {
  getGuestLimit,
  getItems,
  getOrderDetails,
  getOrderId,
  getTotalPrice,
} from 'redux/selectors';
import icons from '../../images/icons.svg';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import { removeOrder, removeItem, getOrder } from 'redux/operations';
import Modal from 'components/Modals/Modal/Modal';

const Cart = ({ mobileOpening }) => {
  const cartItems = useSelector(getItems);
  const total = useSelector(getTotalPrice);
  const orderId = useSelector(getOrderId);
  const groupOrder = useSelector(getGuestLimit);
  const { guests } = useSelector(getOrderDetails);

  const dispatch = useDispatch();

  const [itemRemoveModal, setItemRemoveModal] = useState(false);
  const [removeItemTitle, setRemoveItemTitle] = useState(null);
  const [removeItemPrice, setRemoveItemPrice] = useState('');
  const [removeId, setRemoveId] = useState(null);
  const [cancelLoading, setCancelLoading] = useState(false);
  const [cancelModalOpening, setCancelModalOpening] = useState(false);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [checkoutModalOpening, setCheckoutModalOpening] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [removeError, setRemoveError] = useState(false);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [refreshLoading, setRefreshLoading] = useState(false);
  const [refreshError, setRefreshError] = useState(false);
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
    } else {
      setCancelModalOpening(false);
    }
    setCancelLoading(false);
    setTimeout(() => {
      setServerError(false);
    }, 3000);
  };

  const handleCheckoutOrder = async () => {
    setCheckoutLoading(true);
    setCheckoutLoading(false);
    setCheckoutModalOpening(true);
  };

  const handleRemoveItemFromCart = async () => {
    const order = {
      id: removeId,
      total: (parseFloat(total) - removeItemPrice * 1.15).toFixed(2).toString(),
    };
    setRemoveLoading(true);
    const { payload } = await dispatch(removeItem({ orderId, order }));
    if (typeof payload !== 'object') {
      setRemoveError(true);
    } else {
      setItemRemoveModal(false);
    }
    setRemoveLoading(false);
    setTimeout(() => {
      setRemoveError(false);
    }, 3000);
  };

  const handleUpdateGroupOrder = async () => {
    setRefreshLoading(true);
    const { payload } = await dispatch(getOrder({ orderId }));
    if (typeof payload !== 'object') {
      setRefreshError(true);
    }
    setRefreshLoading(false);
    setTimeout(() => {
      setRefreshError(false);
    }, 3000);
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
              {groupOrder !== 'none' && (
                <div className={css.groupOrderInfo}>
                  <div className={css.groupOrderTitleWrapper}>
                    <h2 className={css.title}>Group Order</h2>

                    <buttton
                      onClick={handleUpdateGroupOrder}
                      className={css.refreshBtn}
                    >
                      {refreshLoading ? <Loader /> : 'Refresh'}
                    </buttton>
                  </div>
                  <div className={css.groupStatistic}>
                    <p>
                      <span>Group Members</span>
                      <span>
                        {guests.length}{' '}
                        {guests.length === 1 ? 'person' : 'persons'}
                      </span>
                    </p>
                    <p>
                      <span>Limit Per Guest</span>
                      <span>{groupOrder}</span>
                    </p>
                  </div>
                  {refreshError && (
                    <p className={css.errorMessage}>* Server error</p>
                  )}
                </div>
              )}
              <h2 className={css.title}>Your Items</h2>
              <ul className={css.cartList}>
                {cartItems.map(el => {
                  return (
                    <li key={el.id} className={css.cartItem}>
                      {el.name && <p className={css.ownerName}>{el.name}</p>}
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
                          onClick={e => {
                            setRemoveItemPrice(el.price);
                            setRemoveItemTitle(el.title);
                            setRemoveId(e.currentTarget.id);
                            setItemRemoveModal(true);
                          }}
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
              {groupOrder !== 'none' && (
                <div className={css.groupOrderInfo}>
                  <div className={css.groupOrderTitleWrapper}>
                    <h2 className={css.title}>Group Order</h2>

                    <buttton
                      onClick={handleUpdateGroupOrder}
                      className={css.refreshBtn}
                    >
                      {refreshLoading ? <Loader /> : 'Refresh'}
                    </buttton>
                  </div>
                  <div className={css.groupStatistic}>
                    <p>
                      <span>Group Members</span>
                      <span>
                        {guests.length}{' '}
                        {guests.length === 1 ? 'person' : 'persons'}
                      </span>
                    </p>
                    <p>
                      <span>Limit Per Guest</span>
                      <span>{groupOrder}</span>
                    </p>
                  </div>
                  {refreshError && (
                    <p className={css.errorMessage}>* Server error</p>
                  )}
                </div>
              )}
              {orderId && (
                <p className={css.orderIdText}>
                  Order id: <span>{orderId}</span>
                </p>
              )}
              <div className={css.imageWrapper}><img src={cards} alt="Logo" /></div>
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
            <button
              disabled={!orderId || cartItems.length === 0}
              className={
                orderId && cartItems.length !== 0
                  ? css.checkoutBtn
                  : `${css.checkoutBtn} ${css.disabled}`
              }
              onClick={handleCheckoutOrder}
            >
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
              disabled={!orderId}
              className={
                orderId ? css.cancelBtn : `${css.cancelBtn} ${css.disabled}`
              }
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
      {itemRemoveModal && (
        <Modal modalIsOpen={setItemRemoveModal} title="Warning">
          <p className={css.removeModalText}>
            Remove <span>{removeItemTitle}</span> from your cart?
          </p>
          <div className={css.cancelBtnsWrapper}>
            <button
              className={css.noButton}
              onClick={() => setItemRemoveModal(false)}
            >
              No
            </button>
            <button
              className={css.cancelBtn}
              onClick={handleRemoveItemFromCart}
            >
              {removeLoading ? <Loader modal={true} /> : 'Yes, Remove'}
            </button>
            {removeError && <p className={css.errorMessage}>* Server error</p>}
          </div>
        </Modal>
      )}
    </>
  );
};

export default Cart;
