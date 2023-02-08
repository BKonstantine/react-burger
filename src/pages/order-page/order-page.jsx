import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeader from "../../components/app-header/app-header";
import style from "./order-page.module.css";

export default function OrderPage() {
  const orderNumber = "034533";
  const burgerName = "Black Hole Singularity острый бургер";
  const burgerStatus = "Выполнен";
  const orderDate = "Вчера, 13:50 i-GMT+3";
  const price = "510";

  return (
    <>
      <AppHeader />
      <main className={style.main}>
        <div className={style.container}>
          <div className={style.container__title}>
            <p className="text text_type_digits-default mb-10">{`#${orderNumber}`}</p>
            <p className="text text_type_main-medium mb-3">{`${burgerName}`}</p>
            <p
              className={`text text_type_main-default ${style.color}`}
            >{`${burgerStatus}`}</p>
          </div>
          <div className={style.container__date}>
            <p className="text text_type_main-default text_color_inactive">
              {orderDate}
            </p>
            <div className={style.price}>
              <CurrencyIcon type="primary" />
              <p className="text text_type_digits-default">{price}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
