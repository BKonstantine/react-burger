import BurgerConstructorOrder from "../burger-constructor-order/burger-constructor-order";
import style from "./burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { data } from "../../utils/data";

export default function BurgerConstructor() {
  return (
    <div className={`${style.container} pt-25 pl-4`}>
      <ul className={style.lists}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={1255}
          extraClass="ml-8"
          thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
        />
        <ul className={style.container_constructor}>
          {data.map((item) => {
            if (item.type !== "bun") {
              return (
                <li key={item._id} className={style.element}>
                  <DragIcon />
                  <ConstructorElement
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image}
                  />
                </li>
              );
            }
          })}
        </ul>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={1255}
          extraClass="ml-8"
          thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
        />
      </ul>
      <BurgerConstructorOrder />
    </div>
  );
}
