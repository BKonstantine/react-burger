import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import style from "./login-page.module.css";

export default function LoginPage() {
  return (
    <main className={style.main}>
      <div className={style.container}>
        <p className="text text_type_main-medium mb-6">Вход</p>
        <form className={style.form}>
          <EmailInput />
          <PasswordInput />
          <Button htmlType="button" type="primary" size="medium">
            Войти
          </Button>
        </form>
        <div className={style.links}>
          <p className="text text_type_main-default">
            Вы — новый пользователь?
            <Link to="/register" className={style.link}>Зарегистрироваться</Link>
          </p>
          <p className="text text_type_main-default">
            Забыли пароль?
            <Link to="/forgot-password" className={style.link}>Восстановить пароль</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
