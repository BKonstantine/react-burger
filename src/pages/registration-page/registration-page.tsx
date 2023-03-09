import { ChangeEvent, FormEvent, FC } from "react";
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "../../services/hooks";
import {
  setRegisterFormValue,
  registerUser,
} from "../../services/actions/userAction";
import style from "./registration-page.module.css";

const RegistrationPage: FC = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { registerForm } = useSelector((store) => store.userReducer);

  function onFormChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch(setRegisterFormValue(e.target.name, e.target.value));
  }

  function regestrationFormSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch(registerUser(registerForm, () => navigate("/login")));
  }

  return (
    <>
      <main className={style.main}>
        <div className={style.container}>
          <p className="text text_type_main-medium mb-6">Регистрация</p>
          <form className={style.form} onSubmit={regestrationFormSubmit}>
            <Input
              placeholder="Имя"
              type="text"
              value={registerForm.name}
              name="name"
              onChange={onFormChange}
            />
            <EmailInput
              value={registerForm.email}
              name="email"
              onChange={onFormChange}
            />
            <PasswordInput
              value={registerForm.password}
              name="password"
              onChange={onFormChange}
            />
            <Button htmlType="submit" type="primary" size="medium">
              Зарегистрироваться
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
    </>
  );
};

export default RegistrationPage;
