/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink, useLocation } from "react-router-dom";
import style from "./app-header.module.css";

export default function AppHeader() {
  const activeStyle = {
    color: "#f2f2f3",
  };

  const { pathname } = useLocation();

  const toggleStyleIcon = (url) => {
    if (url === pathname) {
      return "primary";
    } else {
      return "secondary";
    }
  };

  return (
    <header className={style.header}>
      <div className={style.container}>
        <nav className={style.nav}>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={`text text_type_main-default ${style.button}`}
          >
            <BurgerIcon type={toggleStyleIcon("/")} />
            Конструктор
          </NavLink>
          <NavLink
            to="/order_list"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={`text text_type_main-default ${style.button}`}
          >
            <ListIcon type={toggleStyleIcon("/order_list")} />
            Лента заказов
          </NavLink>
          <div className={style.logo}>
            <Logo />
          </div>
          <NavLink
            to="/profile"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={`text text_type_main-default ${style.button} ${style.button_profile}`}
          >
            <ProfileIcon type={toggleStyleIcon("/login")} />
            Личный кабинет
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
