/* eslint-disable array-callback-return */
// eslint-disable-next-line no-unused-vars
import { useEffect, useMemo } from "react";
import { useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import BurgerConstructorOrder from "../burger-constructor-order/burger-constructor-order";
import style from "./burger-constructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorFillingList from "../burger-constructor-filling-list/burger-constructor-filling-list";
import loader from "../../image/double-ring-loader.svg";

export default function BurgerConstructor() {
  const dispatch = useDispatch();

  const bun = useSelector(
    (store) => store.constructor.burgerConstructorBunElement
  );

  const filling = useSelector(
    (store) => store.burgerConstructorReducer.burgerConstructorFillingList
  );

  function onDropHandler(ingredient) {
    console.log(ingredient);
  }

  const [, dropTarget] = useDrop({
    accept: "ingredients",
    drop(ingredient) {
      onDropHandler(ingredient);
    },
  });

  /* const { constructorContext, setConstructorContext } = useContext(
    BurgerConstructorContext
  ); */

  /* const randomIngredients = useMemo(() => {
    return ingredients.slice(0, Math.round(Math.random() * 7) + 3);
  }, [ingredients]);

  const randomBun = useMemo(() => {
    return randomIngredients.find((item) => item.type === "bun");
  }, [randomIngredients]);

  const { randomFilling } = useMemo(() => {
    return randomIngredients.reduce(
      (count, item) => {
        if (item.type !== "bun") {
          count.randomFilling.push(item);
        }
        return count;
      },
      { randomFilling: [] }
    );
  }, [randomIngredients]);

  const totalPrice = useMemo(() => {
    let counter =
      randomBun.price * 2 +
      randomFilling.reduce((sum, item) => sum + item.price, 0);
    return counter;
  }, [randomBun, randomFilling]); */

  /* useEffect(() => {
    setConstructorContext({
      ...constructorContext,
      buns: [...constructorContext.buns, randomBun],
      ingredients: randomFilling,
      id: [
        randomBun._id,
        ...randomFilling.map((item) => item._id),
        randomBun._id,
      ],
      price: totalPrice,
    });
    
  }, []); */

  return (
    <div className={style.container}>
      <ul ref={dropTarget} className={style.lists}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`Выберите булку`}
          price={0}
          extraClass="ml-8"
          thumbnail={loader}
        />
        <ul className={style.container_constructor}>
          {filling.map((item) => {
            return (
              <BurgerConstructorFillingList key={item._id} filling={item} />
            );
          })}
        </ul>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`Выберите булку`}
          price={0}
          extraClass="ml-8"
          thumbnail={loader}
        />
      </ul>
      <BurgerConstructorOrder />
    </div>
  );
}
