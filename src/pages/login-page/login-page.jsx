import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AppHeader from "../../components/app-header/app-header";
import {
  setLoginFormValue,
  loginUser,
} from "../../services/actions/userAction";
import style from "./login-page.module.css";

export default function LoginPage() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { loginForm } = useSelector((store) => store.userReducer);

  function onFormChange(e) {
    dispatch(setLoginFormValue(e.target.name, e.target.value));
  }

  function loginFormSubmit(e) {
    e.preventDefault();
    dispatch(loginUser(loginForm, () => navigate("/")));
  }

  return (
    <>      
      <main className={style.main}>
        <div className={style.container}>
          <p className="text text_type_main-medium mb-6">Вход</p>
          <form className={style.form} onSubmit={loginFormSubmit}>
            <EmailInput
              value={loginForm.email}
              name="email"
              onChange={onFormChange}
            />
            <PasswordInput
              value={loginForm.password}
              name="password"
              onChange={onFormChange}
            />
            <Button htmlType="submit" type="primary" size="medium">
              Войти
            </Button>
          </form>
          <div className={style.links}>
            <p className="text text_type_main-default">
              Вы — новый пользователь?
              <Link to="/register" className={style.link}>
                Зарегистрироваться
              </Link>
            </p>
            <p className="text text_type_main-default">
              Забыли пароль?
              <Link to="/forgot-password" className={style.link}>
                Восстановить пароль
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
