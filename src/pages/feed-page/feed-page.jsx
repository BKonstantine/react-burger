import AppHeader from "../../components/app-header/app-header";
import style from "./feed-page.module.css";

export default function FeedPage() {
  return (
    <>
      <AppHeader />
      <main className={style.main}>
        <p className="text text_type_main-large pt-10 pb-5">Лента заказов</p>
      </main>
    </>
  );
}
