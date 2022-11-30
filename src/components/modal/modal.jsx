import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./modal.module.css";

const modal = document.querySelector("#modal");

export default function Modal({ onCloseModal, children }) {

  function handleEscClose(evt) {    
    if (evt.key === "Escape") {
      onCloseModal();
    }
  }

  React.useEffect(() => {
    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  });

  return ReactDOM.createPortal(
    <>
      <div className={style.container} onClick={e => e.stopPropagation()}>
        <button type="button" className={style.button} onClick={onCloseModal}>
          <CloseIcon />
        </button>
        {children}
      </div>
      <ModalOverlay onCloseModal={onCloseModal} />
    </>,
    modal
  );
}
