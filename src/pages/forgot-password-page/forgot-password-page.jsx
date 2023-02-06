import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AppHeader from "../../components/app-header/app-header";
import {
  setForgotPasswordFormValue,
  forgotPassword,
} from "../../services/actions/userAction";
import style from "./forgot-password-page.module.css";

export default function ForgotPasswordPage() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { forgotPasswordForm } = useSelector((store) => store.userReducer);

  function onFormChange(e) {
    dispatch(setForgotPasswordFormValue(e.target.name, e.target.value));
  }

  function forgotPasswordFormSubmit(e) {
    e.preventDefault();
    dispatch(
      forgotPassword(forgotPasswordForm, () => navigate("/reset-password"))
    );
  }

  return (
    <>
      <AppHeader />
      <main className={style.main}>
        <div className={style.container}>
          <p className="text text_type_main-medium mb-6">
            Восстановление пароля
          </p>
          <form className={style.form} onSubmit={forgotPasswordFormSubmit}>
            <EmailInput
              placeholder="Укажите e-mail"
              value={forgotPasswordForm.email}
              name="email"
              onChange={onFormChange}
            />
            <Button htmlType="submit" type="primary" size="medium">
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
    </>
  );
}
