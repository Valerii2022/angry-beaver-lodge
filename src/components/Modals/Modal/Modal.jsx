import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import icons from '../../../images/icons.svg';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, modalIsOpen, title }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        document.body.classList.remove('lock');
        modalIsOpen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalIsOpen]);

  useEffect(() => {
    document.body.classList.add('lock');
  }, []);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      document.body.classList.remove('lock');
      modalIsOpen(false);
    }
  };

  return createPortal(
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <div className={css.titleWrapper}>
          <h2 className={css.title}>{title}</h2>
          <button
            className={css.closeBtn}
            onClick={() => {
              document.body.classList.remove('lock');
              modalIsOpen(false);
            }}
          >
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
