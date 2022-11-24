import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./AppHeader.module.css";

export default function AppHeader() {
  return (
    <header className={`${style.header} pt-4 pb-4`}>
      <div className={style.container}>
        <button
          className={`${style.button_constructor} pl-5 pr-5 pt-4 pb-4`}
          type="button"
        >
          <BurgerIcon type="primary" />
          <p className="text text_type_main-default pl-2">Конструктор</p>
        </button>
        <button
          className={`${style.button_order} pl-5 pr-5 pt-4 pb-4`}
          type="button"
        >
          <ListIcon type="secondary" />
          <p className="text text_type_main-default pl-2">Лента заказов</p>
        </button>
        <Logo />        
        <button
          className={`${style.button_profile} pl-5 pr-5 pt-4 pb-4`}
          type="button"
        >
          <ProfileIcon type="secondary" />
          <p className="text text_type_main-default pl-2">Личный кабинет</p>
        </button>
      </div>
    </header>
  );
}
