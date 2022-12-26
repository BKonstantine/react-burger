import { useSelector } from "react-redux";
import style from "./order-details.module.css";
import done from "../../image/done.svg";
import Preloader from "../preloader/preloader";

export default function OrderDetails() {
  const order = useSelector((store) => store.currentOrderReducer.order);

  const loading = useSelector(
    (store) => store.currentOrderReducer.orderRequest
  );  

  return (
    <>
      {loading ? (
        <Preloader loading={loading} />
      ) : (
        <>
          <p
            className={`${style.order_number} text text_type_digits-large mt-30`}
          >
            {order}
          </p>
          <p className="text text_type_main-medium mt-8">
            идентификатор заказа
          </p>
          <img className="mt-15 mb-15" src={done} alt="Иконка подтверждения" />
          <p className="text text_type_main-default mb-2">
            Ваш заказ начали готовить
          </p>
          <p className={`text text_type_main-default mb-30 ${style.text}`}>
            Дождитесь готовности на орбитальной станции
          </p>
        </>
      )}
    </>
  );
}
