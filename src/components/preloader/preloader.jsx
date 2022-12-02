import style from "./preloader.module.css";
import preloader from "../../image/preloader.svg";

export default function Preloader({ loading, error }) {
  return (
    <>
      {!loading && (
        <img
          src={preloader}
          alt="Анимация загрузки"
          className={style.preloader}
        />
      )}
      {error && (
        <p className={`text text_type_main-large ${style.text}`}>{error}</p>
      )}
    </>
  );
}
