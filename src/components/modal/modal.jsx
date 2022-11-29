import ModalOverlay from "../modal-overlay/modal-overlay";
import style from "./modal.module.css";
import ReactDOM from "react-dom";

const modal = document.querySelector("#modal");

export default function Modal() {
  return ReactDOM.createPortal(
    <>
      <div className={style.container}></div>
      <ModalOverlay />
    </>,
    modal
  );
}
