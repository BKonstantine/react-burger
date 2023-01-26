import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import style from "./main-page.module.css";

export default function MainPage() {
  return (
    <main className={style.main}>
      <BurgerIngredients />
      <BurgerConstructor />
    </main>
  );
}
