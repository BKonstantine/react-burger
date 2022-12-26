import { useState } from "react";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import style from "./burger-constructor-order.module.css";
import icon from "../../image/icon.svg";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

export default function BurgerConstructorOrder({price}) {
  const [modal, setModal] = useState(false);  

  function toggleModal() {
    setModal((prevModal) => !prevModal);
  }

  return (
    <div className={style.order}>
      <div className={style.price}>
        <p className="text text_type_digits-medium">
          
          {price}
        </p>
        <img src={icon} alt="Иконка валюты" />
      </div>
      <Button htmlType="button" type="primary" size="large" /* onClick={makeOrder} */>
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
