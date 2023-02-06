import AppHeader from "../../components/app-header/app-header";
import style from "./order-list-page.module.css";

export default function OrderListPage() {
  return (
    <>
      <AppHeader />
      <p className={`text text_type_main-large ${style.text}`}>Лента заказов</p>
    </>
  );
}
