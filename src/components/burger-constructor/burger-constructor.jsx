/* eslint-disable array-callback-return */
import { useContext } from "react";
import BurgerConstructorOrder from "../burger-constructor-order/burger-constructor-order";
import style from "./burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerConstructorContext } from "../../context/burger-constructor-context";

export default function BurgerConstructor() {

  // eslint-disable-next-line no-unused-vars
  const {constructorContext, setConstructorContext} = useContext(BurgerConstructorContext);
  
  return (
    <div className={style.container}>
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
          {constructorContext.map((item) => {
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