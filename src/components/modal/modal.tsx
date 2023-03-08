import { useEffect, FC, ReactNode } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./modal.module.css";

const modal = document.querySelector("#modal") as HTMLElement;

interface IModal {
  onCloseModal?: () => void;
  children: ReactNode;
  route?: boolean;
}

const Modal: FC<IModal> = ({ onCloseModal, children, route }) => {
  const navigate = useNavigate();

  function handleClose() {
    if (route) {
      return navigate(-1);
    } else {
      onCloseModal && onCloseModal();
    }
  }

  function handleEscClose(evt: { key: string }) {
    if (evt.key === "Escape") {
      handleClose();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ReactDOM.createPortal(
    <>
      <div className={style.container} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={style.button}
          onClick={() => handleClose()}
        >
          <CloseIcon type="primary" />
        </button>
        {children}
      </div>
      <ModalOverlay onCloseModal={() => handleClose()} />
    </>,
    modal
  );
};

export default Modal;
