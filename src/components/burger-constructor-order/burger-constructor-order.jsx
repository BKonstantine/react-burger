import { useState } from "react";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import style from "./burger-constructor-order.module.css";
import icon from "../../image/icon.svg";
import { sendOrderRequest } from "../../utils/api";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

export default function BurgerConstructorOrder() {
  const [modal, setModal] = useState(false);
  /* const { constructorContext, setOrder } = useContext();

  function makeOrder() {
    sendOrderRequest(constructorContext.id)
      .then((res) => setOrder(res.order.number))
      .then(() => {
        toggleModal();
      })
      .catch(() => console.log("Ошибка при формировании заказа"));
  } */

  function toggleModal() {
    setModal((prevModal) => !prevModal);
  }

  return (
    <div className={style.order}>
      <div className={style.price}>
        <p className="text text_type_digits-medium">
          {/*  {constructorContext.price} */}
          1000
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
