import { useState, useEffect } from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import style from "./app.module.css";
import getIngridients from "../../utils/api";
import Preloader from "../preloader/preloader";
import { BurgerIngredientsContext } from "../../context/burger-ingredients-context";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    getIngridients()
      .then((data) => {
        setData(data.data);
      })
      .catch((err) => {
        console.log(err);
        setErr(err);
      })
      .finally(() => {
        setLoading(!loading);
      });
  }, []);

  return (
    <>
      <Preloader loading={loading} error={err} />
      {!err && (
        <>
          <AppHeader />
          <main className={style.main}>
            <BurgerIngredientsContext.Provider value={data}>
              <BurgerIngredients />
              <BurgerConstructor />
            </BurgerIngredientsContext.Provider>
          </main>
        </>
      )}
    </>
  );
}
