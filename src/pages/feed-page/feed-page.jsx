import AppHeader from "../../components/app-header/app-header";
import OrderFeedList from "../../components/order-feed-list/order-feed-list";
import OrderCounters from "../../components/order-counters/order-counters";
import style from "./feed-page.module.css";

export default function FeedPage() {
  return (
    <>
      <AppHeader />
      <main className={style.main}>
        <p className="text text_type_main-large pt-10 pb-5">Лента заказов</p>
        <div className={style.container}>
          <OrderFeedList isFeedList={true} />
          <OrderCounters />
        </div>
      </main>
    </>
  );
}
