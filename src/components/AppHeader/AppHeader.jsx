import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./AppHeader.module.css";
import CustomButton from "../CustomButton/CustomButton";

export default function AppHeader() {
  return (
    <header className={`${style.header} pt-4 pb-4`}>
      <div className={style.container}>
        <div style={{ display: "flex", gap: "8px" }}>
          <CustomButton style={style.button_active}>
            <BurgerIcon type="primary" />
            <p className="text text_type_main-default pl-2">Конструктор</p>
          </CustomButton>
          <CustomButton style={style.button}>
            <ListIcon type="secondary" />
            <p className="text text_type_main-default pl-2">Лента заказов</p>
          </CustomButton>
        </div>
        <Logo />
        <CustomButton style={style.button}>
          <ProfileIcon type="secondary" />
          <p className="text text_type_main-default pl-2">Личный кабинет</p>
        </CustomButton>
      </div>
    </header>
  );
}
