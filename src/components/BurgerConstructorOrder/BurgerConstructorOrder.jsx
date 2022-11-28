import style from "./BurgerConstructorOrder.module.css";
import icon from "../../image/icon.svg";
import {  
  Button  
} from "@ya.praktikum/react-developer-burger-ui-components";

export default function BurgerConstructorOrder(props) {
  return (
    <div className={`${style.order} mt-10 mr-4`}>
      <div className={style.price}>
        <p className="text text_type_digits-medium">60</p>
        <img src={icon} alt="Иконка валюты" />
      </div>
      <Button htmlType="button" type="primary" size="large">
        Оформить заказ
      </Button>
    </div>
  );
}
