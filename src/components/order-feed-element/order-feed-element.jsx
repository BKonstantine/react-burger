import cn from "classnames";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderIngredientsList from "../order-ingredients-list/order-ingredients-list";
import style from "./order-feed-element.module.css";

export default function OrderFeedElement({ isFeedList, order }) {
  function checkStatus(status) {
    if (status === "done") {
      return "Выполнен";
    } else if (status === "canseled") {
      return "Отменен";
    } else if (status === "pending") {
      return "Готовится";
    } else if (status === "created") {
      return "Создан";
    }
  }

  return (
    <li className={cn(style.container)}>
      <div className={style.container__order}>
        <p className="text text_type_digits-default">{`#${order.number}`}</p>
        <p className="text text_type_main-default text_color_inactive">
          {order.createdAt}
        </p>
      </div>
      <div className={style.container__burger}>
        <p className="text text_type_main-medium">{order.name}</p>
        {isFeedList && (
          <p className="text text_type_main-default">
            {checkStatus(order.status)}
          </p>
        )}
      </div>
      <div className={style.container__ingredients}>
        {/* <OrderIngredientsList ingredients={fillingList} /> */}
        <div className={style.price}>
          <CurrencyIcon type="primary" />
          <p className="text text_type_digits-default">500</p>
        </div>
      </div>
    </li>
  );
}
