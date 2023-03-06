import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import style from "./burger-constructor-order.module.css";
import icon from "../../image/icon.svg";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { makeOrder } from "../../services/actions/currentOrderAction";
import { RESET_ORDER } from "../../services/actions/currentOrderAction";
import { resetIngredient } from "../../services/actions/burgerConstructorAction";

export default function BurgerConstructorOrder({ price }) {
  const order = useSelector((store) => store.currentOrderReducer.order);

  const ingredients = useSelector((store) => store.burgerConstructorReducer);

  const isAuth = useSelector((store) => store.userReducer.isAuth);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function closeModal() {
    dispatch({ type: RESET_ORDER });
    dispatch(resetIngredient());
  }

  function sendOrder() {
    isAuth ? dispatch(makeOrder(ingredients)) : navigate("/login");
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
        onClick={sendOrder}
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
