import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setRegisterFormValue,
  registerUser,
} from "../../services/actions/userAction";
import style from "./registration-page.module.css";

export default function RegistrationPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { registerForm } = useSelector((store) => store.userReducer);

  function onFormChange(e) {
    dispatch(setRegisterFormValue(e.target.name, e.target.value));
  }

  return (
    <main className={style.main}>
      <div className={style.container}>
        <p className="text text_type_main-medium mb-6">Регистрация</p>
        <form className={style.form}>
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
          <Button
            htmlType="button"
            type="primary"
            size="medium"
            onClick={() => dispatch(registerUser(registerForm, navigate("/")))}
          >
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
  );
}
