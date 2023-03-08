import { FC } from "react";
import { useSelector, useDispatch } from "../../services/hooks";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import style from "./burger-constructor-order.module.css";
import IconPrice from "../icon-price/icon-price";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { makeOrder } from "../../services/actions/currentOrderAction";
import { resetOrder } from "../../services/actions/currentOrderAction";
import { resetIngredient } from "../../services/actions/burgerConstructorAction";

interface IBurgerConstructorOrder {
  price: number;
}

const BurgerConstructorOrder: FC<IBurgerConstructorOrder> = ({ price }) => {
  const order = useSelector((store) => store.currentOrderReducer.order);

  const ingredients = useSelector((store) => store.burgerConstructorReducer);

  const arrayId = ingredients.burgerConstructorBunElement
    ? [
        ingredients.burgerConstructorBunElement._id,
        ...ingredients.burgerConstructorFillingList.map((item) => item._id),
        ingredients.burgerConstructorBunElement._id,
      ]
    : [];

  const isAuth = useSelector((store) => store.userReducer.isAuth);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function closeModal() {
    dispatch(resetOrder());
    dispatch(resetIngredient());
  }

  function sendOrder() {
    isAuth ? dispatch(makeOrder(arrayId)) : navigate("/login");
  }

  return (
    <div className={style.order}>
      <div className={style.price}>
        <p className="text text_type_digits-medium">{price}</p>
        <IconPrice />
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
};

export default BurgerConstructorOrder;
