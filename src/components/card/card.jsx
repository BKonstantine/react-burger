import React from "react";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientDetails from "../ingredient-details/ingredient-details";
import style from "./card.module.css";
import cardPropTypes from "../../utils/prop-types";
import Modal from "../modal/modal";

export default function Card({ ingredient }) {
  const [modal, setModal] = React.useState(false);

  function openModal() {
    setModal(!modal);
  }

  function closeModal() {
    setModal(!modal);
  }

  return (
    <li className={style.card} onClick={openModal}>
      <Counter count={1} size="default" />
      <img className={style.card_image} src={ingredient.image} alt={ingredient.name} />
      <div className={style.card_price}>
        <p className="text text_type_digits-default mt-2 mb-2">{ingredient.price}</p>
        <CurrencyIcon />
      </div>
      <p className={`text text_type_main-default ${style.card_name}`}>
        {ingredient.name}
      </p>
      {modal && (
        <Modal onCloseModal={closeModal}>
          <IngredientDetails ingredient={ingredient} />
        </Modal>
      )}
    </li>
  );
}

Card.propTypes = {
  ingredient: cardPropTypes,
};
