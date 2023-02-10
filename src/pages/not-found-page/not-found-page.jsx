import AppHeader from "../../components/app-header/app-header";
import style from "./not-found-page.module.css";

export default function NotFoundPage() {
  return (
    <>      
      <p className={`text text_type_main-large ${style.text}`}>
        Такой страницы не существует
      </p>
    </>
  );
}
