import React, { forwardRef, useImperativeHandle, useState } from "react";
import { createPortal } from "react-dom";
//styles
import { useModalStyles } from "./Modal.styles";
//img
import sprite from "../../img/sprite.svg";

export const Modal = forwardRef(({ title, children }, ref) => {
  const classes = useModalStyles();
  const [showModal, setShowModal] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => {
      document.body.style.overflow = "hidden";
      setShowModal(true);
    },
    close: closeModal,
  }));

  function closeModal() {
    document.body.style.overflow = "auto";
    setShowModal(false);
  }

  return (
    showModal &&
    createPortal(
      <>
        <div className={classes.modalMask} onClick={closeModal} />
        <div className={classes.modal}>
          <div className={classes.header}>
            <svg className={classes.crosse} onClick={closeModal}>
              <use href={`${sprite}#close`} />
            </svg>
          </div>
          <h2 className={classes.title}>{title}</h2>
          <div className={classes.content}>{children}</div>
        </div>
      </>,
      document.body,
    )
  );
});
