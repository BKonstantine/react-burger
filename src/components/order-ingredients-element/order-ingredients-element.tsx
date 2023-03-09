import { FC } from "react";
import style from "./order-ingredients-element.module.css";
import { IIngredient } from "../../services/types/data";

interface IOrderIngredientsElement {
  ingredient: IIngredient;
  index: number;
  length: number;
  showCounter: boolean;
}

const OrderIngredientsElement: FC<IOrderIngredientsElement> = ({
  ingredient,
  index,
  length,
  showCounter,
}) => {
  return (
    <li
      className={`${style.element} ${showCounter && style.opacity}`}
      style={{ zIndex: 15 - index }}
    >
      <img
        className={style.image}
        src={ingredient.image_mobile}
        alt={ingredient.name}
      />
      {showCounter && (
        <p className={`text text_type_main-default ${style.text}`}>{`+${
          length - 6
        }`}</p>
      )}
    </li>
  );
};

export default OrderIngredientsElement;
