import cn from "classnames";
import { v4 as uuidv4 } from "uuid";
import OrderFeedElement from "../order-feed-element/order-feed-element";
import style from "./order-feed-list.module.css";

export default function OrderFeedList({ listClassName, isFeedList, orders }) {
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
}
