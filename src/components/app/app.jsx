import React from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import style from "./app.module.css";
import getIngridients from "../../utils/api";
import Preloader from "../preloader/preloader";

export default function App() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [err, setErr] = React.useState("");

  React.useEffect(() => {
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
            <BurgerIngredients data={data} />
            <BurgerConstructor data={data} />
          </main>
        </>
      )}
    </>
  );
}
