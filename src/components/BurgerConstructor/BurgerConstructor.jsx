import BurgerConstructorOrder from "../BurgerConstructorOrder/BurgerConstructorOrder";
import style from "./BurgerConstructor.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { data } from "../../utils/data";

export default function BurgerConstructor(props) {
  return (
    <div className={`${style.container} pt-25 pl-4`}>
      <ul style={{ display: "flex", flexDirection: "column", gap: "16px", margin: 0, padding: 0 }}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          extraClass="ml-8"
          /* thumbnail={img} */
        />
        <div className={`${style.container_constructor} pr-2`}>
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
      </ul>
      <BurgerConstructorOrder />
    </div>
  );
}
