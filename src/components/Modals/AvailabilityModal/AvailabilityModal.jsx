import Address from 'components/Address/Address';
import css from './AvailabilityModal.module.css';
import { useEffect, useState } from 'react';

const AvailabilityModal = ({ closeModal }) => {
  const [orderType, setOrderType] = useState('');

  useEffect(() => {
    setOrderType(localStorage.getItem('orderType'));
  }, []);

  return (
    <div className={css.container}>
      <p>Restaurant Location:</p>
      <Address />

      <label>
        <input
          checked={orderType === 'delivery' || false}
          id="delivery"
          type="radio"
          name="order-type"
          onChange={e => setOrderType(e.target.id)}
        />
        <span>Delivery</span>
      </label>
      <label>
        <input
          checked={orderType === 'carryout' || false}
          id="carryout"
          type="radio"
          name="order-type"
          onChange={e => setOrderType(e.target.id)}
        />
        <span>Carryout</span>
      </label>
      <p>Order Time: ASAP (20 - 30m)</p>
      <button
        onClick={() => {
          localStorage.setItem('orderType', orderType);
          closeModal(orderType);
        }}
      >
        Update
      </button>
    </div>
  );
};

export default AvailabilityModal;
