import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./Card.module.css";

export default function Card(props) {  
  return (
    <div className={style.card}>
      <img
        className={`${style.card_image} pl-4 pr-4`}
        src={props.image}
        alt={props.name}
      />
      <div className={style.card_price}>
        <p className="text text_type_digits-default mt-1 mb-1">{props.price}</p>
        <CurrencyIcon />
      </div>
      <p className="text text_type_main-small">{props.name}</p>
    </div>
  );
}
