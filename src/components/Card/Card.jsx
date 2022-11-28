import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./Card.module.css";
import PropTypes from "prop-types";

export default function Card(props) {
  return (
    <li className={style.card}>
      <Counter count={1} size="default" />
      <img
        className={`${style.card_image} pl-4 pr-4`}
        src={props.image}
        alt={props.name}
      />
      <div className={style.card_price}>
        <p className="text text_type_digits-default mt-2 mb-2">{props.price}</p>
        <CurrencyIcon />
      </div>
      <p
        style={{ textAlign: "center" }}
        className="text text_type_main-default"
      >
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
