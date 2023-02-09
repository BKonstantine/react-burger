import AppHeader from "../../components/app-header/app-header";
import BurgerDetails from "../../components/burger-details/burger-details";
import style from "./order-page.module.css";

export default function OrderPage() {
  return (
    <>
      <AppHeader />
      <main className={style.main}>
        <BurgerDetails />
      </main>
    </>
  );
}
