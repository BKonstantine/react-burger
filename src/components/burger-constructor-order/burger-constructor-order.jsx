import { useContext, useState } from "react";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import style from "./burger-constructor-order.module.css";
import icon from "../../image/icon.svg";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerConstructorContext } from "../../context/burger-constructor-context";

export default function BurgerConstructorOrder() {
  const [modal, setModal] = useState(false);
  const { constructorContext } = useContext(BurgerConstructorContext);

  function toggleModal() {
    setModal((prevModal) => !prevModal);
  }

  return (
    <div className={style.order}>
      <div className={style.price}>
        <p className="text text_type_digits-medium">{constructorContext.price}</p>
        <img src={icon} alt="Иконка валюты" />
      </div>
      <Button
        htmlType="button"
        type="primary"
        size="large"
        onClick={toggleModal}
      >
        Оформить заказ
      </Button>
      {modal && (
        <Modal onCloseModal={toggleModal}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}
