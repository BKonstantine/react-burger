import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  wsConnectionStart,
  wsConnectionClosed,
} from "../../services/actions/socketAction";
import OrderFeedList from "../../components/order-feed-list/order-feed-list";
import style from "./user-order-page.module.css";
import { WS_URL_PROFILE } from "../../utils/variables";

export default function UserOrderPage() {
  const dispatch = useDispatch();
  const { orders } = useSelector((store) => store.socketReducer);
  useEffect(() => {
    dispatch(wsConnectionStart(WS_URL_PROFILE));
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
