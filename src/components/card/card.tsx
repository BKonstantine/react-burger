import { useMemo, FC } from "react";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "../../services/hooks";
import { useLocation } from "react-router-dom";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./card.module.css";
import { setCurrentIngredient } from "../../services/actions/currentIngredientAction";
import { Link } from "react-router-dom";
import { IIngredient } from "../../services/types/data";

interface ICard {
  ingredient: IIngredient;
}

const Card: FC<ICard> = ({ ingredient }) => {
  const location = useLocation();

  const burgerConstructorIngredients = useSelector(
    (store) => store.burgerConstructorReducer
  );

  const burgerIngredients = useSelector(
    (store) => store.burgerIngredientsReducer
  );

  interface ICounters {
    [counters: string]: number;
  }

  const counter = useMemo(() => {
    const counters: ICounters = {};
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

  const getCounterInredient = (ingredientId: string) => counter[ingredientId];

  const dispatch = useDispatch();

  const [, dragRef, dragPreviewRef] = useDrag({
    type: "ingredients",
    item: ingredient,
  });

  function openModal() {
    dispatch(setCurrentIngredient(ingredient));
  }

  return (
    <li ref={dragRef} className={style.card} onClick={openModal}>
      {getCounterInredient(ingredient._id) !== 0 && (
        <Counter count={getCounterInredient(ingredient._id)} size="default" />
      )}
      <Link
        to={`/ingredients/${ingredient._id}`}
        className={`text_color_primary ${style.link}`}
        state={{ locationIngredient: location }}
      >
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
          <CurrencyIcon type="primary" />
        </div>
        <p className={`text text_type_main-default ${style.card_name}`}>
          {ingredient.name}
        </p>
      </Link>
    </li>
  );
};

export default Card;
