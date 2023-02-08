import OrderFeedList from "../../components/order-feed-list/order-feed-list";
import style from "./user-order-page.module.css";

export default function UserOrderPage() {
  return <OrderFeedList isFeedList={true} listClassName={style.list}/>;
}
