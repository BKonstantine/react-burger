import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./modal.module.css";
import PropTypes from "prop-types";

const modal = document.querySelector("#modal");

export default function Modal({ onCloseModal, children }) {
  function handleEscClose(evt) {
    if (evt.key === "Escape") {
      onCloseModal(evt);
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
      <div className={style.container} onClick={(e) => e.stopPropagation()}>
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

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
