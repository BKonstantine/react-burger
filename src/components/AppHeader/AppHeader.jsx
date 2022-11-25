import {
  Logo,
  BurgerIcon,
  Button,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./AppHeader.module.css";

export default function AppHeader() {
  return (
    <header className={`${style.header} pt-4 pb-4`}>
      <div className={style.container}>
        <div style={{ display: "flex", gap: "8px" }}>
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            extraClass={`${style.button_active} pt-4 pb-4 pl-5 pr-5`}
          >
            <BurgerIcon type="primary" />
            Конструктор
          </Button>
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            extraClass={`${style.button} pt-4 pb-4 pl-5 pr-5`}
          >
            <ListIcon type="secondary" />
            Лента заказов
          </Button>
        </div>
        <Logo />
        <Button
          htmlType="button"
          type="secondary"
          size="medium"
          style={{ justifySelf: "end" }}
          extraClass={`${style.button} pt-4 pb-4 pl-5 pr-5`}          
        >
          <ProfileIcon type="secondary" />
          Личный кабинет
        </Button>
      </div>
    </header>
  );
}
