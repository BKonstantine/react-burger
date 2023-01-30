import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import style from "./forgot-password-page.module.css";

export default function ForgotPasswordPage() {
  return (
    <main className={style.main}>
      <div className={style.container}>
        <p className="text text_type_main-medium mb-6">Восстановление пароля</p>
        <form className={style.form}>
          <EmailInput placeholder="Укажите e-mail" />
          <Button htmlType="button" type="primary" size="medium">
            Восстановить
          </Button>
        </form>
        <p className="text text_type_main-default">
          Вспомнили пароль?
          <Link to="/login" className={style.link}>
            Войти
          </Link>
        </p>
      </div>
    </main>
  );
}
