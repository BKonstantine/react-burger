import { useDispatch } from "react-redux";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burger-constructor-filling-list.module.css";
import { DELETE_INGREDIENT } from "../../services/actions/burgerConstructorAction";

export default function BurgerConstructorFillingList({ filling }) {
  const dispatch = useDispatch();

  return (
    <li key={filling._id} className={style.element}>
      <DragIcon />
      <ConstructorElement
        text={filling.name}
        price={filling.price}
        thumbnail={filling.image}
        handleClose={() =>
          dispatch({ type: DELETE_INGREDIENT, payload: filling })
        }
      />
    </li>
  );
}
