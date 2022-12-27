import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import style from "./burger-constructor-order.module.css";
import icon from "../../image/icon.svg";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { makeOrder } from "../../services/actions/currentOrderAction";
import Preloader from "../preloader/preloader";

export default function BurgerConstructorOrder({ price }) {
  const [modal, setModal] = useState(false);

  const error = useSelector((store) => store.currentOrderReducer.orderFailed);

  const errorText = useSelector(
    (store) => store.currentOrderReducer.orderFailedText
  );

  const dispatch = useDispatch();

  const ingredients = useSelector((store) => store.burgerConstructorReducer);

  function toggleModal() {
    setModal((prevModal) => !prevModal);
  }

  return (
    <div className={style.order}>
      <div className={style.price}>
        <p className="text text_type_digits-medium">{price}</p>
        <img src={icon} alt="Иконка валюты" />
      </div>
      <Button
        htmlType="button"
        type="primary"
        size="large"
        onClick={() => dispatch(makeOrder(ingredients, toggleModal))}
        disabled={!ingredients.burgerConstructorBunElement}
      >
        Оформить заказ
      </Button>

      {error ? (
        <Preloader error={error} errorText={errorText} />
      ) : (
        modal && (
          <Modal onCloseModal={toggleModal}>
            <OrderDetails />
          </Modal>
        )
      )}
      {/* {modal && (
        <Modal onCloseModal={toggleModal}>
          <OrderDetails />
        </Modal>
      )} */}
    </div>
  );
}
