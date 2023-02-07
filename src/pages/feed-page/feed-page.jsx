import AppHeader from "../../components/app-header/app-header";
import style from "./feed-page.module.css";

export default function FeedPage() {
  return (
    <>
      <AppHeader />
      <p className={`text text_type_main-large ${style.text}`}>Лента заказов</p>
    </>
  );
}
