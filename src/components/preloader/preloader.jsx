import style from "./preloader.module.css";
import preloader from "../../image/preloader.svg";
import PropTypes from "prop-types";

export default function Preloader({ loading, error, errorText }) {
  console.log("Сработал");
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

Preloader.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  errorText: PropTypes.string,
};
