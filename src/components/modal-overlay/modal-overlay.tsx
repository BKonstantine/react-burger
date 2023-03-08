import { FC } from "react";
import style from "./modal-overlay.module.css";

interface IModalOverlay {
  onCloseModal: () => void;
}

const ModalOverlay: FC<IModalOverlay> = ({ onCloseModal }) => {
  return <div className={style.overlay} onClick={onCloseModal}></div>;
};

export default ModalOverlay;
