import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./card.module.css";
import PropTypes from "prop-types";

export default function Card(props) {
  return (
    <li className={style.card}>
      <Counter count={1} size="default" />
      <img
        className={style.card_image}
        src={props.image}
        alt={props.name}
      />
      <div className={style.card_price}>
        <p className="text text_type_digits-default mt-2 mb-2">{props.price}</p>
        <CurrencyIcon />
      </div>
      <p className={`text text_type_main-default ${style.card_name}`}>
        {props.name}
      </p>
    </li>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
