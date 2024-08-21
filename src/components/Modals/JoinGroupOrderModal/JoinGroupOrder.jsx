import { createPortal } from 'react-dom';
import css from './JoinGroupOrder.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getOrder } from 'redux/operations';

const modalRoot = document.querySelector('#modal-root');

const JoinGroupOrderModal = ({ modalIsOpen, orderId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getGroupOrderDetails = async () => {
    await dispatch(getOrder({ orderId }));
    navigate('/order');
    modalIsOpen(false);
  };

  return createPortal(
    <div className={css.overlay}>
      <div className={css.modal}>
        <div className={css.titleWrapper}>
          <h2 className={css.title}>Let`s order together</h2>
        </div>
        <div className={css.content}>
          <p>
            You are invited to join a group order, paid for by the group`s
            organizer.
          </p>
          <button onClick={getGroupOrderDetails}>Join Order</button>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default JoinGroupOrderModal;
