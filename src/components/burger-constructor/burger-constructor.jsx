import { useMemo } from "react";
import { useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import BurgerConstructorOrder from "../burger-constructor-order/burger-constructor-order";
import style from "./burger-constructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorFillingList from "../burger-constructor-filling-list/burger-constructor-filling-list";
import loader from "../../image/double-ring-loader.svg";
import { ADD_INGREDIENT } from "../../services/actions/burgerConstructorAction";

export default function BurgerConstructor() {
  const dispatch = useDispatch();

  const bun = useSelector(
    (store) => store.burgerConstructorReducer.burgerConstructorBunElement
  );

  const fillingList = useSelector(
    (store) => store.burgerConstructorReducer.burgerConstructorFillingList
  );

  function onDropHandler(ingredient) {
    dispatch({ type: ADD_INGREDIENT, payload: ingredient });
  }

  const [{ isHover }, dropTarget] = useDrop({
    accept: "ingredients",
    drop(ingredient) {
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
          thumbnail={bun === undefined ? loader : bun.image}
        />
        <ul className={style.container_constructor}>
          {fillingList.map((item, index) => {
            return (
              <BurgerConstructorFillingList
                key={`${item._id}+${index}`}
                filling={item}
              />
            );
          })}
        </ul>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={bun === undefined ? "Выберите булку" : `${bun.name} (низ)`}
          price={bun === undefined ? 0 : bun.price}
          extraClass="ml-8"
          thumbnail={bun === undefined ? loader : bun.image}
        />
      </ul>
      <BurgerConstructorOrder price={totalPrice} />
    </div>
  );
}
