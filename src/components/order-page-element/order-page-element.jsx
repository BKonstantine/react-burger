import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./order-page-element.module.css";

export default function OrderPageElement({ ingredient }) {
  const counter = "1";

  return (
    <li className={style.container}>
      <div className={style.container__element}>
        <div className={style.container__image}>
          <img
            className={style.image}
            src={ingredient.image_mobile}
            alt={ingredient.name}
          />
        </div>
        <p className={`text text_type_main-default ${style.text}`}>
          {ingredient.name}
        </p>
      </div>
      <div className={style.container__counter}>
        <p className="text text_type_digits-default">{`${counter} x ${ingredient.price}`}</p>
        <CurrencyIcon type="primary" />
      </div>
    </li>
  );
}
