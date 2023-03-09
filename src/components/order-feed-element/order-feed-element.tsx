import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import OrderIngredientsList from "../order-ingredients-list/order-ingredients-list";
import style from "./order-feed-element.module.css";
import useOrder from "../../hooks/useOrder";
import { IOrder } from "../../services/types/data";

interface IOrderFeedElement {
  isFeedList: boolean;
  order: IOrder;
}

const OrderFeedElement: FC<IOrderFeedElement> = ({ isFeedList, order }) => {
  const { orderIngredientsList, orderPrice, orderStatus, GMT } =
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
            <FormattedDate date={new Date(order.createdAt)} /> {`${GMT}`}
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
};

export default OrderFeedElement;
