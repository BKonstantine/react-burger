import cn from "classnames";
import OrderFeedElement from "../order-feed-element/order-feed-element";
import style from "./order-feed-list.module.css";

export default function OrderFeedList({ listClassName, isFeedList }) {
  return (
    <ul className={cn(style.list, listClassName)}>
      <OrderFeedElement isFeedList={isFeedList} />
      <OrderFeedElement isFeedList={isFeedList} />
      <OrderFeedElement isFeedList={isFeedList} />
      <OrderFeedElement isFeedList={isFeedList} />
      <OrderFeedElement isFeedList={isFeedList} />
      <OrderFeedElement isFeedList={isFeedList} />
    </ul>
  );
}
