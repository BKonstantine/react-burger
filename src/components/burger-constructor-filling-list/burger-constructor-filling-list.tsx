import { FC } from "react";
import { useDispatch } from "../../services/hooks";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burger-constructor-filling-list.module.css";
import { deleteIngredient } from "../../services/actions/burgerConstructorAction";
import { Reorder } from "framer-motion";
import { IIngredient } from "../../services/types/data";

interface IBurgerConstructorFillingList {
  filling: IIngredient;
}

const BurgerConstructorFillingList: FC<IBurgerConstructorFillingList> = ({
  filling,
}) => {
  const dispatch = useDispatch();

  return (
    <Reorder.Item
      whileDrag={{ scale: 0.9 }}
      value={filling}
      className={style.element}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={filling.name}
        price={filling.price}
        thumbnail={filling.image}
        handleClose={() => dispatch(deleteIngredient(filling))}
      />
    </Reorder.Item>
  );
};

export default BurgerConstructorFillingList;
