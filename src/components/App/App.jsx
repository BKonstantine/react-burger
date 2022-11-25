import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import style from "./App.module.css";

export default function App() {
  return (
    <>
      <AppHeader />
      <main className={style.main}>
        <BurgerIngredients />
      </main>
    </>
  );
}
