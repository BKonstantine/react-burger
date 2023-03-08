import { FC } from "react";
import { useSelector } from "../../services/hooks";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Preloader from "../preloader/preloader";
import style from "./app-main.module.css";

const AppMain: FC = () => {
  const { loading, error, errorText } = useSelector((store) => ({
    loading: store.burgerIngredientsReducer.burgerIngredientsListRequest,
    error: store.burgerIngredientsReducer.burgerIngredientsListFailed,
    errorText: store.burgerIngredientsReducer.burgerIngredientsListFailedText,
  }));

  return loading ? (
    <Preloader loading={loading} />
  ) : error ? (
    <Preloader error={error} errorText={errorText} />
  ) : (
    <DndProvider backend={HTML5Backend}>
      <main className={style.main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </DndProvider>
  );
};

export default AppMain;
