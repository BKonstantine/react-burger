import style from "./BurgerConstructor.module.css";
import icon from "../../image/icon.svg";
import {
  ConstructorElement,
  Button,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { data } from "../../utils/data";

export default function BurgerConstructor(props) {
  function filterData(data, type) {}
  
  return (
    <div className={`${style.container} pt-25 pl-4`}>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          extraClass="ml-8"
          /* thumbnail={img} */
        />
        <div className={`${style.container_constructor} pr-4`}>
          <div className={style.element}>
            <DragIcon />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              /* thumbnail={img} */
            />
          </div>
        </div>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          extraClass="ml-8"
          /* thumbnail={img} */
        />
      </div>
      <div className={`${style.order} mt-10`}>
        <div className={style.price}>
          <p className="text text_type_digits-medium">60</p>
          <img src={icon} alt="Иконка валюты" />
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
}
