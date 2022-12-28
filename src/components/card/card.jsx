import { useState, useMemo } from "react";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientDetails from "../ingredient-details/ingredient-details";
import style from "./card.module.css";
import cardPropTypes from "../../utils/prop-types";
import Modal from "../modal/modal";
import {
  SET_CURRENT_INGREDIENT,
  RESET_CURRENT_INGREDIENT,
} from "../../services/actions/currentIngredientAction";

export default function Card({ ingredient }) {
  const currenIngredient = useSelector(
    (store) => store.currentIngredientReducer.currentIngredient
  );

  const burgerConstructorIngredients = useSelector(
    (store) => store.burgerConstructorReducer
  );

  const burgerIngredients = useSelector(
    (store) => store.burgerIngredientsReducer
  );

  const counter = useMemo(() => {
    const counters = {};
    burgerIngredients.burgerIngredientsList.forEach((ingredient) => {
      counters[ingredient._id] =
        burgerConstructorIngredients.burgerConstructorFillingList.filter(
          (constructorItem) => constructorItem._id === ingredient._id
        ).length;
    });
    if (burgerConstructorIngredients.burgerConstructorBunElement) {
      counters[
        burgerConstructorIngredients.burgerConstructorBunElement._id
      ] = 2;
    }
    return counters;
  }, [burgerConstructorIngredients, burgerIngredients]);

  const getCounterInredient = (ingredientId) => counter[ingredientId];

  const dispatch = useDispatch();

  const [, dragRef, dragPreviewRef] = useDrag({
    type: "ingredients",
    item: ingredient,
  });

  function openModal() {
    dispatch({ type: SET_CURRENT_INGREDIENT, payload: ingredient });
  }

  function closeModal(e) {
    e.stopPropagation();
    dispatch({ type: RESET_CURRENT_INGREDIENT });
  }

  return (
    <li ref={dragRef} className={style.card} onClick={openModal}>
      {getCounterInredient(ingredient._id) !== 0 && (
        <Counter count={getCounterInredient(ingredient._id)} size="default" />
      )}
      <img
        ref={dragPreviewRef}
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
      {currenIngredient && (
        <Modal onCloseModal={closeModal}>
          <IngredientDetails />
        </Modal>
      )}
    </li>
  );
}

Card.propTypes = {
  ingredient: cardPropTypes,
};
