import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  wsConnectionStartProfile,
  wsConnectionClosed,
} from "../../services/actions/socketAction";
import OrderFeedList from "../../components/order-feed-list/order-feed-list";
import style from "./user-order-page.module.css";

export default function UserOrderPage() {
  const dispatch = useDispatch();
  const { orders } = useSelector((store) => store.socketReducer);
  useEffect(() => {
    dispatch(wsConnectionStartProfile());
    return () => {
      dispatch(wsConnectionClosed());
    };
  }, []);

  return (
    orders && (
      <OrderFeedList
        orders={orders}
        isFeedList={true}
        listClassName={style.list}
      />
    )
  );
}
