import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./modal.module.css";

const modal = document.querySelector("#modal");

export default function Modal({ onClick, children }) {
  function handleEscClose(evt) {
    console.log(evt);
    if (evt.key === "Esc") {
      onClick();
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
      <div className={style.container}>
        <button type="button" className={style.button} onClick={onClick}>
          <CloseIcon />
        </button>
        {children}
      </div>
      <ModalOverlay onClick={onClick} />
    </>,
    modal
  );
}
