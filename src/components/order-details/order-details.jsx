import style from "./order-details.module.css";
import done from "../../image/done.svg";

export default function OrderDetails(props) {
  return (
    <>
      <p className={`${style.order_number} text text_type_digits-large mt-30`}>
        {Math.floor(Math.random() * 100000)}
      </p>
      <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
      <img className="mt-15 mb-15" src={done} alt="Иконка подтверждения" />
      <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
      <p className={`text text_type_main-default mb-30 ${style.text}`}>
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  );
}
