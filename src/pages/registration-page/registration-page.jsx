import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setParticipantFormValue } from "../../services/actions/registrationPageAction";
import style from "./registration-page.module.css";

export default function RegistrationPage() {
  const dispatch = useDispatch();

  const { name, email, password } = useSelector(
    (store) => store.registrationPageReducer.form
  );

  function onFormChange(e) {
    dispatch(setParticipantFormValue(e.target.name, e.target.value));
  }

  return (
    <main className={style.main}>
      <div className={style.container}>
        <p className="text text_type_main-medium mb-6">Регистрация</p>
        <form className={style.form}>
          <Input
            placeholder="Имя"
            type="text"
            value={name}
            name="name"
            onChange={onFormChange}
          />
          <EmailInput value={email} name="email" onChange={onFormChange} />
          <PasswordInput
            value={password}
            name="password"
            onChange={onFormChange}
          />
          <Button htmlType="button" type="primary" size="medium">
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
