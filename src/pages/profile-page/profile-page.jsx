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

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const refreshToken = getCookie("refreshToken");

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
          <Input icon="EditIcon" disabled placeholder="Имя" value={user.name} />
          <Input
            icon="EditIcon"
            disabled
            placeholder="Логин"
            value={user.email}
          />
          <Input icon="EditIcon" disabled placeholder="Пароль" value="******" />
          <div className={style.container__buttons}>
            <Button type="secondary" size="medium" htmlType="button">
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
