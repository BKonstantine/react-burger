import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderPageList from "../order-page-list/order-page-list";
import style from "./burger-details.module.css";
import useOrder from "../../hooks/useOrder";

export default function BurgerDetails({ titleClassName }) {
  const orders = useSelector((store) => store.socketReducer.orders);
  const { id } = useParams();
  const order = orders.find((item) => item._id === id);

  const { orderIngredientsList, orderPrice, orderStatus, orderDate } =
    useOrder(order);

  return (
    <div className={style.container}>
      <div className={style.container__title}>
        <p
          className={`text text_type_digits-default mb-10 ${titleClassName}`}
        >{`#${order.number}`}</p>
        <p className="text text_type_main-medium mb-2">{`${order.name}`}</p>
        <p
          className={`text text_type_main-default ${style.color}`}
        >{`${orderStatus}`}</p>
      </div>
      <OrderPageList ingredients={orderIngredientsList} />
      <div className={style.container__date}>
        <p className="text text_type_main-default text_color_inactive">
          {orderDate}
        </p>
        <div className={style.price}>
          <CurrencyIcon type="primary" />
          <p className="text text_type_digits-default">{orderPrice}</p>
        </div>
      </div>
    </div>
  );
}
