import { FC } from "react";
import style from "./not-found-page.module.css";

const NotFoundPage: FC = () => {
  return (
    <>
      <p className={`text text_type_main-large ${style.text}`}>
        Такой страницы не существует
      </p>
    </>
  );
};

export default NotFoundPage;
