import OrderPageElement from "../order-page-element/order-page-element";
import style from "./order-page-list.module.css";

export default function OrderPageList({ ingredients }) {
  return (
    <div className={style.container}>
      <ul className={style.list}>
        {ingredients.map((item) => {
          return <OrderPageElement ingredient={item} />;
        })}
      </ul>
    </div>
  );
}
