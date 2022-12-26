import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import style from "./app.module.css";
import { getIngridients } from "../../services/actions/burgerIngredientsAction";
import Preloader from "../preloader/preloader";

export default function App() {
  /* const [constructorContext, setConstructorContext] = useState({
    buns: [],
    ingredients: [],
    id: [],
    price: 0,
  }); */

  const dispatch = useDispatch();

  const loading = useSelector(
    (store) => store.burgerIngredientsReducer.burgerIngredientsListRequest
  );

  const error = useSelector(
    (store) => store.burgerIngredientsReducer.burgerIngredientsListFailed
  );

  const errorText = useSelector(
    (store) => store.burgerIngredientsReducer.burgerIngredientsListFailedText
  );

  useEffect(() => {
    dispatch(getIngridients());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Preloader loading={loading} error={error} errorText={errorText} />
      ) : error ? (
        <Preloader loading={loading} error={error} errorText={errorText} />
      ) : (
        <>
          <AppHeader />
          <main className={style.main}>
            <BurgerIngredients />
            <BurgerConstructor />
          </main>
        </>
      )}
    </>
  );
}
