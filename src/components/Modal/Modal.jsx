import { useEffect } from 'react';
import css from './Modal.module.css';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, modalIsOpen }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        modalIsOpen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalIsOpen]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      modalIsOpen(false);
    }
  };

  return createPortal(
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button className={css.closeBtn} onClick={handleBackdropClick}>
          close
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
