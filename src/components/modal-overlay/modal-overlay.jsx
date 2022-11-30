import style from "./modal-overlay.module.css";
import PropTypes from "prop-types";

export default function ModalOverlay({ onCloseModal }) {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <div className={style.overlay} onClick={onCloseModal}></div>;
    </div>
  );
}

ModalOverlay.propTypes = {
  onCloseModal: PropTypes.func.isRequired,  
};