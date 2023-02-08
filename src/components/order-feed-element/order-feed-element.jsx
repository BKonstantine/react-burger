import { useSelector } from "react-redux";
import cn from "classnames";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./order-feed-element.module.css";

export default function OrderFeedElement({ isFeedList }) {
  const orderNumber = "034535";
  const orderDate = "Сегодня, 16:20 i-GMT+3";
  const burgerName = "Death Star Starship Main бургер";
  const status = "Создан";
  const price = 480;
  const { fillingList } = useSelector((store) => ({
    fillingList: store.burgerConstructorReducer.burgerConstructorFillingList,
  }));

  return (
    <li className={cn(style.container)}>
      <div className={style.container__order}>
        <p className="text text_type_digits-default">{`#${orderNumber}`}</p>
        <p className="text text_type_main-default text_color_inactive">
          {orderDate}
        </p>
      </div>
      <div className={style.container__burger}>
        <p className="text text_type_main-medium">{burgerName}</p>
        {isFeedList && <p className="text text_type_main-default">{status}</p>}
      </div>
      <div className={style.container__ingredients}>
        <div className={style.price}>
          <CurrencyIcon type="primary" />
          <p className="text text_type_digits-default">{price}</p>
        </div>
      </div>
    </li>
  );
}
