import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import style from "./reset-password-page.module.css";

export default function ResetPasswordPage() {
  return (
    <main className={style.main}>
      <div className={style.container}>
        <p className="text text_type_main-medium mb-6">Восстановление пароля</p>
        <form className={style.form}>
          <PasswordInput placeholder="Введите новый пароль" />
          <Input placeholder="Введите код из письма" />
          <Button htmlType="button" type="primary" size="medium">
            Сохранить
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
