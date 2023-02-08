import cn from "classnames";
import OrderFeedElement from "../order-feed-element/order-feed-element";
import style from "./order-feed-list.module.css";

export default function OrderFeedList({ listClassName }) {
  return (
    <ul className={cn(style.list, listClassName)}>
      <OrderFeedElement isFeedList={false} />
    </ul>
  );
}
