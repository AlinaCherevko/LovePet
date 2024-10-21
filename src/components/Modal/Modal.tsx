import { FC, useEffect } from "react";
import { createPortal } from "react-dom";

import style from "./Modal.module.scss";
import { ModalProps } from "./types";

const rootModal = document.querySelector("#modal-root");

const Modal: FC<ModalProps> = ({ onClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const closeModalByEsc = (e: KeyboardEvent) => {
      if (e.key !== "Escape") {
        return;
      }

      setTimeout(() => {
        onClose();
      }, 300);
    };

    document.addEventListener("keydown", closeModalByEsc);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", closeModalByEsc);
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return createPortal(
    <div className={style.backdrop} onClick={handleBackdropClick}>
      {children}
    </div>,
    rootModal! // This tells TypeScript that rootModal is definitely not null or undefined.
  );
};

export default Modal;
