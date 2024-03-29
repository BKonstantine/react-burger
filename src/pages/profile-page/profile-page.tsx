import { useState, ChangeEvent, FormEvent, FC } from "react";
import { NavLink, useNavigate, Outlet, useLocation } from "react-router-dom";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "../../services/hooks";
import style from "./profile-page.module.css";
import { getCookie } from "../../utils/cookie";
import { logoutUser, changeUserData } from "../../services/actions/userAction";

const ProfilePage: FC = () => {
  const { user } = useSelector((store) => store.userReducer);

  const [userData, setUserDate] = useState(user);

  const [input, setInput] = useState({ name: false, email: false });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const location = useLocation();

  const refreshToken = getCookie("refreshToken");

  const activeStyle = {
    color: "#f2f2f3",
  };

  function onFormReset() {
    setUserDate({ name: user.name, email: user.email });
  }

  function onFormChange(e: ChangeEvent<HTMLInputElement>) {
    setUserDate({ ...userData, [e.target.name]: e.target.value });
  }

  function profileFormSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch(changeUserData(userData));
  }

  function checkButton() {
    return JSON.stringify(user) === JSON.stringify(userData);
  }

  return (
    <>
      <main className={style.main}>
        <div className={style.container}>
          <div className={style.container__nav}>
            <nav className={style.nav}>
              <NavLink
                to="/profile"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className={`text text_type_main-medium text_color_inactive ${style.link}`}
                end
              >
                Профиль
              </NavLink>
              <NavLink
                to="orders"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className={`text text_type_main-medium text_color_inactive ${style.link}`}
                state={{ order: true }}
                end
              >
                История заказов
              </NavLink>
              <NavLink
                to="/login"
                onClick={() =>
                  dispatch(logoutUser(refreshToken, () => navigate("/login")))
                }
                className={`text text_type_main-medium text_color_inactive ${style.link}`}
              >
                Выход
              </NavLink>
            </nav>
            <p className={`text text_type_main-default ${style.text}`}>
              В&nbsp;этом разделе вы&nbsp;можете изменить свои персональные
              данные
            </p>
          </div>
          {location.state ? (
            <Outlet />
          ) : (
            <form
              className={style.container__form}
              onSubmit={profileFormSubmit}
            >
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
              <Input
                onChange={(e) => e.target}
                icon="EditIcon"
                disabled
                placeholder="Пароль"
                value="******"
              />
              <div className={style.container__buttons}>
                <Button
                  type="secondary"
                  size="medium"
                  htmlType="button"
                  onClick={onFormReset}
                  disabled={checkButton() ? true : false}
                >
                  Отмена
                </Button>
                <Button
                  type="primary"
                  size="medium"
                  htmlType="submit"
                  disabled={checkButton() ? true : false}
                >
                  Сохранить
                </Button>
              </div>
            </form>
          )}
        </div>
      </main>
    </>
  );
};

export default ProfilePage;
