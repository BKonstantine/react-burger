import { useDispatch } from "react-redux";
import cn from "classnames";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderIngredientsList from "../order-ingredients-list/order-ingredients-list";
import style from "./order-feed-element.module.css";
import useOrder from "../../hooks/useOrder";
import { SET_CURRENT_ORDER } from "../../services/actions/currentOrderAction";

export default function OrderFeedElement({ isFeedList, order }) {
  const { orderIngredientsList, orderPrice, orderStatus, orderDate } =
    useOrder(order);

  const dispatch = useDispatch();

  function openModal() {
    dispatch({ type: SET_CURRENT_ORDER, payload: order });
  }

  return (
    <li className={cn(style.container)} onClick={openModal}>
      <div className={style.container__order}>
        <p className="text text_type_digits-default">{`#${order.number}`}</p>
        <p className="text text_type_main-default text_color_inactive">
          {orderDate}
        </p>
      </div>
      <div className={style.container__burger}>
        <p className="text text_type_main-medium">{order.name}</p>
        {isFeedList && (
          <p
            className={`text text_type_main-default ${
              order.status === "done" ? style.status : undefined
            }`}
          >
            {orderStatus}
          </p>
        )}
      </div>
      <div className={style.container__ingredients}>
        <OrderIngredientsList ingredients={orderIngredientsList} />
        <div className={style.price}>
          <CurrencyIcon type="primary" />
          <p className="text text_type_digits-default">{orderPrice}</p>
        </div>
      </div>
    </li>
  );
}
