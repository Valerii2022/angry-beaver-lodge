import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import icons from '../../../images/icons.svg';
import css from './Modal.module.css';
import { useNavigate } from 'react-router-dom';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, modalIsOpen, title, orderId }) => {
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();

  const closeModal = useCallback(() => {
    setIsActive(false);
    setTimeout(() => modalIsOpen(false), 300);
    if (orderId) {
      navigate('/order')
    }
  }, [modalIsOpen, navigate, orderId]);

  useEffect(() => {
    setIsActive(true);

    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  useEffect(() => {
    document.body.classList.add('lock');
    return () => {
      document.body.classList.remove('lock');
    };
  }, []);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  return createPortal(
    <div
      className={`${css.overlay} ${isActive ? css.active : ''}`}
      onClick={handleBackdropClick}
    >
      <div className={css.modal}>
        <div className={css.titleWrapper}>
          <h2 className={css.title}>{title}</h2>
          <button className={css.closeBtn} onClick={closeModal}>
            <svg className={css.icon} width={20} height={20}>
              <use href={`${icons}#close`} />
            </svg>
          </button>
        </div>
        <div className={css.content}>{children}</div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
