import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import OrderFeedElement from "../order-feed-element/order-feed-element";
import style from "./order-feed-list.module.css";
import { IOrder } from "../../services/types/data";

interface IOrderFeedList {
  isFeedList: boolean;
  orders: Array<IOrder>;
}

const OrderFeedList: FC<IOrderFeedList> = ({ isFeedList, orders }) => {
  return (
    <ul className={`${style.list} ${isFeedList && style.feed}`}>
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
