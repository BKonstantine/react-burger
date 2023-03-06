import { useDispatch } from "react-redux";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burger-constructor-filling-list.module.css";
import cardPropTypes from "../../utils/prop-types";
import { deleteIngredient } from "../../services/actions/burgerConstructorAction";
import { Reorder } from "framer-motion";

export default function BurgerConstructorFillingList({ filling }) {
  const dispatch = useDispatch();

  return (
    <Reorder.Item
      whileDrag={{ scale: 0.9 }}
      value={filling}
      className={style.element}
    >
      <DragIcon />
      <ConstructorElement
        text={filling.name}
        price={filling.price}
        thumbnail={filling.image}
        handleClose={() => dispatch(deleteIngredient(filling))}
      />
    </Reorder.Item>
  );
}

BurgerConstructorFillingList.propTypes = {
  filling: cardPropTypes,
};
