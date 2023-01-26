import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./login-page.module.css";

export default function LoginPage() {
  return (
    <main className={style.main}>
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
          <span className={style.link}>Зарегистрироваться</span>
        </p>
        <p className="text text_type_main-default">
          Забыли пароль?
          <span className={style.link}>Восстановить пароль</span>
        </p>
      </div>
    </main>
  );
}
