import React from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import style from "./app.module.css";
import getIngridients from "../../utils/api";
import Modal from "../modal/modal"
 
export default function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    getIngridients()
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  return (
    <>
      <AppHeader />
      <main className={style.main}>
        <BurgerIngredients data={data}/>
        <BurgerConstructor data={data}/>        
      </main>
    </>
  );
}
