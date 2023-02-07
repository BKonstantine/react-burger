/* eslint-disable jsx-a11y/anchor-is-valid */
import { useCallback } from "react";
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

  const toggleStyleIcon = useCallback(
    (url) => {
      if (pathname === "/" && url === "/") {
        return "primary";
      } else if (pathname.includes(url) && url !== "/") {
        return "primary";
      } else {
        return "secondary";
      }
    },
    [pathname]
  );  

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
            to="/feed"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={`text text_type_main-default ${style.button}`}
          >
            <ListIcon type={toggleStyleIcon("/feed")} />
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
            <ProfileIcon type={toggleStyleIcon("/profile")} />
            Личный кабинет
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
