import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { createPortal } from 'react-dom';
//styles
import './Modal.css';
//img
import sprite from "../../img/sprite.svg";

export const Modal = forwardRef(({ title, children }, ref) => {
  const [showModal, setShowModal] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => {
      document.body.style.overflow = 'hidden';
      setShowModal(true);
    },
    close: closeModal,
  }));

  function closeModal() {
    document.body.style.overflow = 'auto';
    setShowModal(false);
  }

  return (
    showModal && createPortal(
      <>
        <div className="modal-mask" onClick={closeModal} />
        <div className="modal">
          <div className="modal__header">
                <svg  className="modal__crosse"  onClick={closeModal}>
                  <use href={`${sprite}#close`} />
                </svg>
          </div>
          <h2 className="modal__title">{title}</h2>
          <div className="modal-content">
            {children}
          </div>
        </div>
      </>,
      document.body,
    )
  );
});
