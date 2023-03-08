import { useMemo, FC } from "react";
import { useDrop } from "react-dnd";
import { useSelector, useDispatch } from "../../services/hooks";
import BurgerConstructorOrder from "../burger-constructor-order/burger-constructor-order";
import style from "./burger-constructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorFillingList from "../burger-constructor-filling-list/burger-constructor-filling-list";
import { LOADER } from "../../utils/variables";
import {
  addIngredient,
  sortIngredients,
} from "../../services/actions/burgerConstructorAction";
import { v4 as uuidv4 } from "uuid";
import { Reorder } from "framer-motion";
import { IIngredient } from "../../services/types/data";

const BurgerConstructor: FC = () => {
  const dispatch = useDispatch();

  const { bun, fillingList } = useSelector((store) => ({
    bun: store.burgerConstructorReducer.burgerConstructorBunElement,
    fillingList: store.burgerConstructorReducer.burgerConstructorFillingList,
  }));

  function onDropHandler(ingredient: IIngredient) {
    dispatch(addIngredient(uuidv4(), ingredient));
  }

  const [{ isHover }, dropTarget] = useDrop({
    accept: "ingredients",
    drop(ingredient: IIngredient) {
      onDropHandler(ingredient);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const bunPrice = useMemo(() => {
    return bun === undefined ? 0 : bun.price * 2;
  }, [bun]);

  const fillingPrice = useMemo(() => {
    return fillingList.reduce((sum, item) => sum + item.price, 0);
  }, [fillingList]);

  const totalPrice = useMemo(() => {
    return bun === undefined ? fillingPrice : bunPrice + fillingPrice;
  }, [bunPrice, fillingPrice, bun]);

  return (
    <div className={style.container}>
      <ul
        ref={dropTarget}
        className={isHover ? style.lists_hover : style.lists}
      >
        <ConstructorElement
          type="top"
          isLocked={true}
          text={bun === undefined ? "Выберите булку" : `${bun.name} (верх)`}
          price={bun === undefined ? 0 : bun.price}
          extraClass="ml-8"
          thumbnail={bun === undefined ? LOADER : bun.image}
        />
        <Reorder.Group
          axis="y"
          values={fillingList}
          className={style.container_constructor}
          onReorder={(sortFillingList) =>
            dispatch(sortIngredients(sortFillingList))
          }
        >
          {fillingList.map((item) => {
            return (
              <BurgerConstructorFillingList
                key={item.constructorItemId}
                filling={item}
              />
            );
          })}
        </Reorder.Group>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={bun === undefined ? "Выберите булку" : `${bun.name} (низ)`}
          price={bun === undefined ? 0 : bun.price}
          extraClass="ml-8"
          thumbnail={bun === undefined ? LOADER : bun.image}
        />
      </ul>
      <BurgerConstructorOrder price={totalPrice} />
    </div>
  );
};

export default BurgerConstructor;
