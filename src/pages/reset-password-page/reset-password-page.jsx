import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setResetPasswordFormValue,
  resetPassword,
} from "../../services/actions/userAction";
import style from "./reset-password-page.module.css";

export default function ResetPasswordPage() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { resetPasswordForm } = useSelector((store) => store.userReducer);
  console.log(resetPasswordForm);

  function onFormChange(e) {
    dispatch(setResetPasswordFormValue(e.target.name, e.target.value));
  }

  function resetFormSubmit(e) {
    e.preventDefault();
    dispatch(resetPassword(resetPasswordForm, () => navigate("/login")));
  }

  return (
    <main className={style.main}>
      <div className={style.container}>
        <p className="text text_type_main-medium mb-6">Восстановление пароля</p>
        <form className={style.form} onSubmit={resetFormSubmit}>
          <PasswordInput
            placeholder="Введите новый пароль"
            value={resetPasswordForm.password}
            name="password"
            onChange={onFormChange}
          />
          <Input
            placeholder="Введите код из письма"
            value={resetPasswordForm.token}
            name="token"
            type="text"
            onChange={onFormChange}
          />
          <Button htmlType="submit" type="primary" size="medium">
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
