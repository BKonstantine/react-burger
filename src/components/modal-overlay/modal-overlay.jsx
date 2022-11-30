import style from "./modal-overlay.module.css";

export default function ModalOverlay({ onCloseModal }) {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <div className={style.overlay} onClick={onCloseModal}></div>;
    </div>
  );
}
