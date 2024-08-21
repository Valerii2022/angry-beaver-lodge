import css from './JoinGroupOrder.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getOrder } from 'redux/operations';

const JoinGroupOrderModal = ({ modalIsOpen, orderId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getGroupOrderDetails = async () => {
    await dispatch(getOrder({ orderId }));
    navigate('/order');
    modalIsOpen(false);
  };

  return (
    <div className={css.container}>
      <p className={css.message}>
        You are invited to join a group order, paid for by the group`s
        organizer.
      </p>
      <div className={css.bottomWrapper}>
        <a
          href="https://support.menufy.com/hc/en-us/articles/360044057712-Group-Ordering"
          target="_blank"
          rel="noopener noreferrer"
          className={css.helpBtn}
        >
          <span className={css.helpIcon}>?</span>
          <span>Help</span>
        </a>
      </div>
      <div className={css.buttonsWrapper}>
        <button className={css.button} onClick={getGroupOrderDetails}>
          Join Order
        </button>
      </div>
    </div>
  );
};

export default JoinGroupOrderModal;
