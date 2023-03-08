import { useSelector } from "../../services/hooks";
import style from "./order-details.module.css";
import IconDone from "../icon-done/icon-done";
import Preloader from "../preloader/preloader";

export default function OrderDetails() {
  const { order, loading, error, errorText } = useSelector((store) => ({
    order: store.currentOrderReducer.order,
    loading: store.currentOrderReducer.orderRequest,
    error: store.currentOrderReducer.orderFailed,
    errorText: store.currentOrderReducer.orderFailedText,
  }));

  return (
    <>
      {loading ? (
        <Preloader loading={loading} />
      ) : error ? (
        <Preloader error={error} errorText={errorText} />
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
          <IconDone className="mt-15 mb-15"/>          
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
