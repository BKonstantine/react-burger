import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import style from "./registration-page.module.css";

export default function RegistrationPage() {
  return (
    <main className={style.main}>
      <div className={style.container}>
        <p className="text text_type_main-medium mb-6">Регистрация</p>
        <form className={style.form}>
          <Input placeholder="Имя" />
          <EmailInput />
          <PasswordInput />
          <Button htmlType="button" type="primary" size="medium">
            Войти
          </Button>
        </form>
        <p className="text text_type_main-default">
          Уже зарегистрированы?
          <Link to="/login" className={style.link}>
            Войти
          </Link>
        </p>
      </div>
    </main>
  );
}
