import { FC, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

import style from "./Modal.module.scss";

const rootModal = document.querySelector("#modal-root");

type ModalProps = {
  onClose: () => void;
  children: ReactNode;
};

const Modal: FC<ModalProps> = ({ onClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const closeModalByEsc = (e: KeyboardEvent) => {
      if (e.key !== "Escape") {
        return;
      }
      onClose();
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
    onClose();
  };

  return createPortal(
    <div className={style.backdrop} onClick={handleBackdropClick}>
      {children}
    </div>,
    rootModal! // This tells TypeScript that rootModal is definitely not null or undefined.
  );
};

export default Modal;
