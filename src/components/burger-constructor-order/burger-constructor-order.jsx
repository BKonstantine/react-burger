import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import style from "./burger-constructor-order.module.css";
import icon from "../../image/icon.svg";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { makeOrder } from "../../services/actions/currentOrderAction";
import { RESET_ORDER } from "../../services/actions/currentOrderAction";

export default function BurgerConstructorOrder({ price }) {
  const order = useSelector((store) => store.currentOrderReducer.order);

  const dispatch = useDispatch();

  const ingredients = useSelector((store) => store.burgerConstructorReducer);

  function closeModal() {
    dispatch({ type: RESET_ORDER });
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
        onClick={() => dispatch(makeOrder(ingredients))}
        disabled={!ingredients.burgerConstructorBunElement}
      >
        Оформить заказ
      </Button>
      {order && (
        <Modal onCloseModal={closeModal}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}

BurgerConstructorOrder.propTypes = {
  price: PropTypes.number.isRequired,
};
