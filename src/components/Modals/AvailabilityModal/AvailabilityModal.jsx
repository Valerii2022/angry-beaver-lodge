import Address from 'components/Address/Address';
import css from './AvailabilityModal.module.css';
import { useEffect, useState } from 'react';
import icons from '../../../images/icons.svg';

const AvailabilityModal = ({
  closeModal,
  groupOrder,
  productDetails,
  closeGroupModal,
  closeDetailsModal,
}) => {
  const [orderType, setOrderType] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState(false);
  const [addressError, setAddressError] = useState(false);

  useEffect(() => {
    setOrderType(localStorage.getItem('orderType'));
    setAddress(localStorage.getItem('deliveryAddress'));
  }, []);

  const handleSubmitForm = e => {
    e.preventDefault();

    if (!orderType) {
      setError(true);
      return;
    }

    localStorage.setItem('orderType', orderType);

    if (orderType === 'delivery') {
      if (!address) {
        setAddressError(true);
        return;
      } else {
        localStorage.setItem('deliveryAddress', address);
      }
    } else {
      setAddress('');
      localStorage.setItem('deliveryAddress', '');
    }
    if (groupOrder) {
      closeGroupModal();
    } else if (productDetails) {
      closeDetailsModal();
    } else {
      closeModal(orderType);
    }
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
              onChange={e => {
                setAddressError(false);
                setError(false);
                setOrderType(e.target.id);
              }}
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
              onChange={e => {
                setAddressError(false);
                setError(false);
                setOrderType(e.target.id);
              }}
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
                value={address}
                onChange={e => {
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
          <p className={css.errorMessage}>* Type The Delivery Address</p>
        )}
        <div className={css.buttonWrapper}>
          <button className={css.submitBtn}>Update</button>
        </div>
      </form>
    </div>
  );
};

export default AvailabilityModal;
