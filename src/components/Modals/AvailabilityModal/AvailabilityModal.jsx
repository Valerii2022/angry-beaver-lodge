import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Address from 'components/Address/Address';
import { addOrder, updateOrder } from 'redux/operations';
import { getDeliveryAddress, getOrderId, getOrderType } from 'redux/selectors';
import Loader from 'components/Loader/Loader';
import { namePattern } from 'Constants/patterns';
import icons from '../../../images/icons.svg';
import css from './AvailabilityModal.module.css';

const AvailabilityModal = ({
  closeModal,
  groupOrder,
  productDetails,
  closeGroupModal,
  closeDetailsModal,
}) => {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [orderType, setOrderType] = useState(useSelector(getOrderType));
  const [address, setAddress] = useState(
    useSelector(getDeliveryAddress) || 'none'
  );
  const [error, setError] = useState(false);
  const [addressError, setAddressError] = useState(false);

  const orderId = useSelector(getOrderId);
  const dispatch = useDispatch();

  const handleSubmitForm = async e => {
    e.preventDefault();

    if (!orderType) {
      setError(true);
      return;
    }

    if (
      orderType === 'delivery' &&
      (!address ||
        address === 'none' ||
        address.length < 10 ||
        !address.match(namePattern))
    ) {
      setAddressError(true);
      return;
    }

    const order = {
      deliveryAddress: address,
      orderType: orderType,
    };
    setLoading(true);
    const { payload } = await dispatch(
      orderId ? updateOrder({ orderId, order }) : addOrder(order)
    );

    if (typeof payload !== 'object') {
      setServerError(true);
    } else {
      setServerError(false);
      if (groupOrder) {
        closeGroupModal();
      } else if (productDetails) {
        closeDetailsModal();
      } else {
        closeModal(orderType);
      }
    }
    setLoading(false);
  };

  const handleChangeOrderType = e => {
    setServerError(false);
    setAddressError(false);
    setError(false);
    setOrderType(e.target.id);
  };
  return (
    <div className={css.container}>
      <p className={css.title}>Restaurant Location:</p>
      <Address modal={true} />
      <form className={css.form} onSubmit={handleSubmitForm}>
        <ul className={css.labelWrapper}>
          <li>
            <input
              className={css.radioInput}
              checked={orderType === 'delivery' || false}
              id="delivery"
              type="radio"
              name="order-type"
              onChange={e => handleChangeOrderType(e)}
            />
            <label htmlFor="delivery" className={css.radioLabel}>
              <svg width={24} height={24} className={css.icon}>
                <use href={`${icons}#vehicle`} />
              </svg>
              <span>Delivery</span>
            </label>
          </li>
          <li>
            <input
              className={css.radioInput}
              checked={orderType === 'carryout' || false}
              id="carryout"
              type="radio"
              name="order-type"
              onChange={e => handleChangeOrderType(e)}
            />
            <label htmlFor="carryout" className={css.radioLabel}>
              <svg width={24} height={24} className={css.icon}>
                <use href={`${icons}#bag`} />
              </svg>
              <span>Carryout</span>
            </label>
          </li>
        </ul>
        {orderType === 'carryout' && (
          <p className={css.carryoutText}>
            Order Time: <span>ASAP (20 - 30m)</span>
          </p>
        )}
        {orderType === 'delivery' && (
          <div className={css.addressWrapper}>
            <label className={css.addressLabel}>
              Type your address*
              <input
                placeholder="Address"
                type="text"
                value={address === 'none' ? '' : address}
                onChange={e => {
                  setServerError(false);
                  setAddressError(false);
                  setAddress(e.target.value);
                }}
              />
            </label>
          </div>
        )}
        {error && (
          <p className={css.errorMessage}>* Choose Order Type Please</p>
        )}
        {addressError && orderType === 'delivery' && (
          <p className={css.errorMessage}>
            * Type The Delivery Address, minimum 10 latin characters
          </p>
        )}
        {serverError && <p className={css.errorMessage}>* Server error</p>}
        <div className={css.buttonWrapper}>
          <button className={css.submitBtn}>
            {loading ? <Loader modal={true} /> : 'Update'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AvailabilityModal;
