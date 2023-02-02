import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import style from "./profile-page.module.css";
import { getCookie } from "../../utils/cookie";
import { logoutUser } from "../../services/actions/userAction";

export default function ProfilePage() {
  const { user } = useSelector((store) => store.userReducer);

  const [userData, setUserDate] = useState(user);

  const [input, setInput] = useState({ name: false, email: false });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const refreshToken = getCookie("refreshToken");

  function onFormReset() {
    setUserDate({ name: user.name, email: user.email });
  }

  function onFormChange(e) {
    setUserDate({ ...userData, [e.target.name]: e.target.value });
  }
  
  return (
    <main className={style.main}>
      <div className={style.container}>
        <div className={style.container__nav}>
          <nav className={style.nav}>
            <NavLink
              style={{ color: "#F2F2F3" }}
              className={`text text_type_main-medium text_color_inactive ${style.link}`}
            >
              Профиль
            </NavLink>
            <NavLink
              className={`text text_type_main-medium text_color_inactive ${style.link}`}
            >
              История заказов
            </NavLink>
            <NavLink
              onClick={() =>
                dispatch(logoutUser(refreshToken, () => navigate("/login")))
              }
              className={`text text_type_main-medium text_color_inactive ${style.link}`}
            >
              Выход
            </NavLink>
          </nav>
          <p className={`text text_type_main-default ${style.text}`}>
            В&nbsp;этом разделе вы&nbsp;можете изменить свои персональные данные
          </p>
        </div>
        <form className={style.container__form}>
          <Input
            icon="EditIcon"
            placeholder="Имя"
            name="name"
            value={userData.name}
            disabled={input.name ? false : true}
            onChange={onFormChange}
            onIconClick={() => setInput({ ...input, name: !input.name })}
          />
          <Input
            icon="EditIcon"
            placeholder="Логин"
            name="email"
            value={userData.email}
            disabled={input.email ? false : true}
            onChange={onFormChange}
            onIconClick={() => setInput({ ...input, email: !input.email })}
          />
          <Input icon="EditIcon" disabled placeholder="Пароль" value="******" />
          <div className={style.container__buttons}>
            <Button
              type="secondary"
              size="medium"
              htmlType="button"
              onClick={onFormReset}
            >
              Отмена
            </Button>
            <Button type="primary" size="medium" htmlType="submit">
              Сохранить
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
