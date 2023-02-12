import OrderPageElement from "../order-page-element/order-page-element";
import { v4 as uuidv4 } from "uuid";
import style from "./order-page-list.module.css";

export default function OrderPageList({ ingredients }) {
  function counter(ingredient) {
    let counter = 0;
    ingredients.forEach((item) => {
      if (item._id === ingredient._id) {
        counter += 1;
      }
    });
    return counter;
  }

  const filteredList = Array.from(new Set(ingredients));  

  return (
    <div className={style.container}>
      <p className="text text_type_main-medium mb-6">Состав:</p>
      <ul className={style.list}>
        {filteredList.map((item) => {
          return (
            <OrderPageElement
              key={uuidv4()}
              counter={counter(item)}
              ingredient={item}
            />
          );
        })}
      </ul>
    </div>
  );
}
