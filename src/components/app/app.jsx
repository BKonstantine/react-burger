import { useState, useEffect } from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import style from "./app.module.css";
import getIngridients from "../../utils/api";
import Preloader from "../preloader/preloader";
import { BurgerIngredientsContext } from "../../context/burger-ingredients-context";
import { BurgerConstructorContext } from "../../context/burger-constructor-context";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const [constructorContext, setConstructorContext] = useState({
    buns: [],
    ingredients: [],
    id: [],
    price: 0,
  });

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Preloader loading={loading} error={err} />
      {!err && (
        <>
          <AppHeader />
          <main className={style.main}>
            <BurgerIngredientsContext.Provider value={data}>
              <BurgerConstructorContext.Provider
                value={{ constructorContext, setConstructorContext }}
              >
                <BurgerIngredients />
                <BurgerConstructor />
              </BurgerConstructorContext.Provider>
            </BurgerIngredientsContext.Provider>
          </main>
        </>
      )}
    </>
  );
}
