import Address from 'components/Address/Address';
import css from './AvailabilityModal.module.css';

const AvailabilityModal = () => {
  return (
    <div className={css.container}>
      <p>Restaurant Location:</p>
      <Address />
      <span>Delivery</span>
      <span>Carryout</span>
      <p>Order Time: ASAP (20 - 30m)</p>
      <button>Update</button>
    </div>
  );
};

export default AvailabilityModal;
