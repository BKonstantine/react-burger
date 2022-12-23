import style from "./preloader.module.css";
import preloader from "../../image/preloader.svg";
import { useSelector } from "react-redux";

export default function Preloader() {
  const loading = useSelector(
    (store) => store.ingredients.burgerIngredientsListRequest
  );  

  const error = useSelector(
    (store) => store.ingredients.burgerIngredientsListFailed
  );

  const errorText = useSelector(
    (store) => store.ingredients.burgerIngredientsListFailedText
  );

  return (
    <>
      {loading && (
        <img
          src={preloader}
          alt="Анимация загрузки"
          className={style.preloader}
        />
      )}
      {error && (
        <p className={`text text_type_main-large ${style.text}`}>{errorText}</p>
      )}
    </>
  );
}
