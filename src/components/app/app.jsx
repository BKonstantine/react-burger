import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import style from "./app.module.css";
import { getIngridients } from "../../services/actions/burgerIngredientsAction";
import Preloader from "../preloader/preloader";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function App() {
  const dispatch = useDispatch();

  const { loading, error, errorText } = useSelector((store) => ({
    loading: store.burgerIngredientsReducer.burgerIngredientsListRequest,
    error: store.burgerIngredientsReducer.burgerIngredientsListFailed,
    errorText: store.burgerIngredientsReducer.burgerIngredientsListFailedText,
  }));

  useEffect(() => {
    dispatch(getIngridients());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Preloader loading={loading} />
      ) : error ? (
        <Preloader error={error} errorText={errorText} />
      ) : (
        <>
          <AppHeader />
          <DndProvider backend={HTML5Backend}>
            <main className={style.main}>
              <BurgerIngredients />
              <BurgerConstructor />
            </main>
          </DndProvider>
        </>
      )}
    </>
  );
}
