import {
  Logo,
  BurgerIcon,
  Button,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./app-header.module.css";

export default function AppHeader() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <nav className={style.nav}>
          <a
            href="#"
            className={`text text_type_main-default ${style.button_active}`}
          >
            <BurgerIcon type="primary" />
            Конструктор
          </a>
          <a href="#" className={`text text_type_main-default ${style.button}`}>
            <ListIcon type="secondary" />
            Лента заказов
          </a>
        </nav>
        <Logo />
        <a
          href="#"
          className={`text text_type_main-default ${style.button} ${style.button_profile}`}
        >
          <ProfileIcon type="secondary" />
          Личный кабинет
        </a>
      </div>
    </header>
  );
}
