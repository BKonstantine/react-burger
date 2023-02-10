import BurgerDetails from "../../components/burger-details/burger-details";
import style from "./order-page.module.css";

export default function OrderPage() {
  return (
    <>      
      <main className={style.main}>
        <BurgerDetails titleClassName={style.title}/>
      </main>
    </>
  );
}
