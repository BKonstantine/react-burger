import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import OrderIngredientsElement from "../order-ingredients-element/order-ingredients-element";
import style from "./order-ingredients-list.module.css";
import { IIngredient } from "../../services/types/data";

interface IOrderIngredientsList {
  ingredients: Array<IIngredient>;
}

const OrderIngredientsList: FC<IOrderIngredientsList> = ({ ingredients }) => {
  function showCounter() {
    if (ingredients.length - 6 === 0) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <ul className={style.list}>
      {ingredients.map((item, index) => {
        if (index < 5) {
          return (
            <OrderIngredientsElement
              ingredient={item}
              index={index}
              key={uuidv4()}
              length={ingredients.length}
              showCounter={false}
            />
          );
        } else if (index === 5) {
          return (
            <OrderIngredientsElement
              ingredient={item}
              index={index}
              key={uuidv4()}
              length={ingredients.length}
              showCounter={showCounter()}              
            />
          );
        }
      })}
    </ul>
  );
};

export default OrderIngredientsList;
