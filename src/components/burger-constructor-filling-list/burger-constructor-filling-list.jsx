import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burger-constructor-filling-list.module.css";

export default function BurgerConstructorFillingList({filling}) {
  return (
    <li key={filling._id} className={style.element}>
      <DragIcon />
      <ConstructorElement
        text={filling.name}
        price={filling.price}
        thumbnail={filling.image}
      />
    </li>
  );
}
