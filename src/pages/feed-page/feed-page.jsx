import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppHeader from "../../components/app-header/app-header";
import OrderFeedList from "../../components/order-feed-list/order-feed-list";
import OrderCounters from "../../components/order-counters/order-counters";
import {
  wsConnectionStart,
  wsConnectionClosed,
} from "../../services/actions/socketAction";
import Modal from "../../components/modal/modal";
import BurgerDetails from "../../components/burger-details/burger-details";
import { RESET_CURRENT_ORDER } from "../../services/actions/currentOrderAction";
import style from "./feed-page.module.css";

export default function FeedPage() {
  const dispatch = useDispatch();
  const { orders, total, totalToday } = useSelector(
    (store) => store.socketReducer
  );

  const currenOrder = useSelector(
    (store) => store.currentOrderReducer.currentOrder
  );

  const { doneList, workList } = useMemo(() => {
    return orders.reduce(
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
    dispatch(wsConnectionStart());
    return () => {
      dispatch(wsConnectionClosed());
    };
  }, []);

  function closeModal(e) {
    e.stopPropagation();
    dispatch({ type: RESET_CURRENT_ORDER });
  }

  return (
    <>
      <AppHeader />
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
      {currenOrder && (
        <Modal onCloseModal={closeModal}>
          <BurgerDetails order={currenOrder}/>
        </Modal>
      )}
    </>
  );
}
