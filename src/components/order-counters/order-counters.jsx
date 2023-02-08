import style from "./order-counters.module.css";

export default function OrderCounters() {
  return (
    <div className={style.container}>
      <div className={style.container__orders}>
        <div className={style.container__done}>
          <p className="text text_type_main-medium">Готовы:</p>
          <ul className={style.orders}>
            <li className={`text text_type_digits-default ${style.order}`}>
              034533
            </li>
            <li className={`text text_type_digits-default ${style.order}`}>
              034533
            </li>
            <li className={`text text_type_digits-default ${style.order}`}>
              034533
            </li>
          </ul>
        </div>
        <div className={style.container__work}>
          <p className="text text_type_main-medium">В работе:</p>
          <ul className={style.orders}>
            <li className={`text text_type_digits-default`}>034533</li>
            <li className={`text text_type_digits-default`}>034533</li>
            <li className={`text text_type_digits-default`}>034533</li>
          </ul>
        </div>
      </div>
      <div className={style.container__digit}>
        <p className="text text_type_main-medium">Выполнено за все время:</p>
        <p className={`text text_type_digits-large ${style.digit}`}>28752</p>
      </div>
      <div className={style.container__digit}>
        <p className="text text_type_main-medium">Выполнено за сегодня:</p>
        <p className={`text text_type_digits-large ${style.digit}`}>138</p>
      </div>
    </div>
  );
}
