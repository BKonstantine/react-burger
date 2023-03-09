import { FC } from "react";
import style from "./preloader.module.css";
import IconPreloader from "../icon-preloader/icon-preloader";

interface IPreloader {
  loading?: boolean;
  error?: boolean;
  errorText?: string;
}

const Preloader: FC<IPreloader> = ({ loading, error, errorText }) => {
  return (
    <>
      {loading && <IconPreloader />}
      {error && (
        <p className={`text text_type_main-large ${style.text}`}>{errorText}</p>
      )}
    </>
  );
};

export default Preloader;
