import { FC } from "react";
import cn from "classnames";
import { v4 as uuidv4 } from "uuid";
import OrderFeedElement from "../order-feed-element/order-feed-element";
import style from "./order-feed-list.module.css";
import { IOrder } from "../../services/types/data";

interface IOrderFeedList {
  listClassName?: { [className: string]: string };
  isFeedList: boolean;
  orders: Array<IOrder>;
}

const OrderFeedList: FC<IOrderFeedList> = ({
  listClassName,
  isFeedList,
  orders,
}) => {
  return (
    <ul className={cn(style.list, listClassName)}>
      {orders.map((order) => {
        return (
          <OrderFeedElement
            key={uuidv4()}
            order={order}
            isFeedList={isFeedList}
          />
        );
      })}
    </ul>
  );
};

export default OrderFeedList;
