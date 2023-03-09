import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "../../services/hooks";
import OrderFeedList from "../../components/order-feed-list/order-feed-list";
import OrderCounters from "../../components/order-counters/order-counters";
import {
  wsConnectionStart,
  wsConnectionClose,
} from "../../services/actions/socketAction";
import style from "./feed-page.module.css";
import { WS_URL_ALL } from "../../utils/variables";

export default function FeedPage() {
  const dispatch = useDispatch();
  const { orders, total, totalToday } = useSelector(
    (store) => store.socketReducer
  );

  interface IOrderStatusSort {
    doneList: Array<number>;
    workList: Array<number>;
  }

  const { doneList, workList } = useMemo(() => {
    if (!orders.length) {
      return { doneList: [], workList: [] };
    }
    return orders.reduce<IOrderStatusSort>(
      (count, item) => {
        // eslint-disable-next-line default-case
        switch (item.status) {
          case "done":
            count.doneList.push(item.number);
            break;
          case "pending":
            count.workList.push(item.number);
            break;
        }
        return count;
      },
      { doneList: [], workList: [] }
    );
  }, [orders]);

  useEffect(() => {
    dispatch(wsConnectionStart(WS_URL_ALL));
    return () => {
      dispatch(wsConnectionClose());
    };
  }, []);

  return (
    orders && (
      <main className={style.main}>
        <p className="text text_type_main-large pt-10 pb-5">Лента заказов</p>
        <div className={style.container}>
          <OrderFeedList orders={orders} isFeedList={false} />
          <OrderCounters
            doneList={doneList}
            workList={workList}
            total={total}
            totalToday={totalToday}
          />
        </div>
      </main>
    )
  );
}
