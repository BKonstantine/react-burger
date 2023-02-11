import { Link, useLocation } from "react-router-dom";
import cn from "classnames";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderIngredientsList from "../order-ingredients-list/order-ingredients-list";
import style from "./order-feed-element.module.css";
import useOrder from "../../hooks/useOrder";

export default function OrderFeedElement({ isFeedList, order }) {
  const { orderIngredientsList, orderPrice, orderStatus, orderDate } =
    useOrder(order);

  const location = useLocation();

  return (
    <li className={cn(style.container)}>
      <Link
      className={`text_color_primary ${style.link}`}
        to={isFeedList ? `/profile/orders/${order._id}` : `/feed/${order._id}`}
        state={
          isFeedList
            ? { locationProfile: location }
            : { locationFeed: location }
        }
      >
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
      </Link>
    </li>
  );
}
