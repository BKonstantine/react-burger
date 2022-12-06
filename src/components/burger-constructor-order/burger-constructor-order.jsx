import React from "react";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import style from "./burger-constructor-order.module.css";
import icon from "../../image/icon.svg";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

export default function BurgerConstructorOrder() {
  const [modal, setModal] = React.useState(false);

  function toggleModal() {
    setModal((prevModal) => !prevModal);
  }

  return (
    <div className={style.order}>
      <div className={style.price}>
        <p className="text text_type_digits-medium">60</p>
        <img src={icon} alt="Иконка валюты" />
      </div>
      <Button htmlType="button" type="primary" size="large" onClick={toggleModal}>
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
