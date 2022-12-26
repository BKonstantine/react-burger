import { useState } from "react";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientDetails from "../ingredient-details/ingredient-details";
import style from "./card.module.css";
import cardPropTypes from "../../utils/prop-types";
import Modal from "../modal/modal";

export default function Card({ ingredient }) {
  const [modal, setModal] = useState(false);
  const [visibleCounter, setvisibleCounter] = useState(false);
  const [counter, setCounter] = useState(undefined);

  function toggleModal(e) {
    e.stopPropagation();
    setModal((prevModal) => !prevModal);
  }

  return (
    <li className={style.card} onClick={toggleModal}>
      {visibleCounter ? <Counter count={0} size="default" /> : undefined}
      <img
        className={style.card_image}
        src={ingredient.image}
        alt={ingredient.name}
      />
      <div className={style.card_price}>
        <p className="text text_type_digits-default mt-2 mb-2">
          {ingredient.price}
        </p>
        <CurrencyIcon />
      </div>
      <p className={`text text_type_main-default ${style.card_name}`}>
        {ingredient.name}
      </p>
      {modal && (
        <Modal onCloseModal={toggleModal}>
          <IngredientDetails ingredient={ingredient} />
        </Modal>
      )}
    </li>
  );
}

Card.propTypes = {
  ingredient: cardPropTypes,
};
