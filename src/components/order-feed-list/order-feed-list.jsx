import cn from "classnames";
import style from "./order-feed-list.module.css";

export default function OrderFeedList({ listClassName }) {
  return <ul className={cn(style.list, listClassName)}></ul>;
}
