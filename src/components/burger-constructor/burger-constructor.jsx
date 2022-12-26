/* eslint-disable array-callback-return */
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import BurgerConstructorOrder from "../burger-constructor-order/burger-constructor-order";
import style from "./burger-constructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorFillingList from "../burger-constructor-filling-list/burger-constructor-filling-list";
import loader from "../../image/double-ring-loader.svg";

export default function BurgerConstructor() {
  const ingredients = useSelector(
    (store) => store.ingredients.burgerIngredientsList
  );

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
      <ul className={style.lists}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`(верх)`}
          price={1010}
          extraClass="ml-8"
          thumbnail={loader}
        />
        <ul className={style.container_constructor}>
          {ingredients.map((item) => {
            return (
              <BurgerConstructorFillingList key={item._id} filling={item} />
            );
          })}
        </ul>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`(верх)`}
          price={1010}
          extraClass="ml-8"
          thumbnail={loader}
        />
      </ul>
      <BurgerConstructorOrder />
    </div>
  );
}
