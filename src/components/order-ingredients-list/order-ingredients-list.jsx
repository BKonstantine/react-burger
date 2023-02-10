import { v4 as uuidv4 } from "uuid";
import OrderIngredientsElement from "../order-ingredients-element/order-ingredients-element";
import style from "./order-ingredients-list.module.css";

export default function OrderIngredientsList({ ingredients }) {
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
        } else if (index === 6) {
          return (
            <OrderIngredientsElement
              ingredient={item}
              index={index}
              key={uuidv4()}
              length={ingredients.length}
              showCounter={true}
              extraClass={style.opacity}
            />
          );
        }
      })}
    </ul>
  );
}
