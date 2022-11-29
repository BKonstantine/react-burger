import React from "react";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./card.module.css";
import cardPropTypes from "../../utils/prop-types";
import Modal from "../modal/modal";

export default function Card({ data }) {
  const [modal, setModal] = React.useState(false);

  function openModal() {
    console.log("open");
    setModal(!modal);
  }

  function closeModal() {
    console.log("close");
    setModal(!modal);
  }

  return (
    <li className={style.card} onClick={openModal}>
      <Counter count={1} size="default" />
      <img className={style.card_image} src={data.image} alt={data.name} />
      <div className={style.card_price}>
        <p className="text text_type_digits-default mt-2 mb-2">{data.price}</p>
        <CurrencyIcon />
      </div>
      <p className={`text text_type_main-default ${style.card_name}`}>
        {data.name}
      </p>
      {modal && <Modal onClick={closeModal} />}
    </li>
  );
}

Card.propTypes = {
  data: cardPropTypes,
};
