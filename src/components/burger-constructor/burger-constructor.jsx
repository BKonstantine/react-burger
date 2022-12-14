/* eslint-disable array-callback-return */
import { useContext, useEffect, useMemo } from "react";
import BurgerConstructorOrder from "../burger-constructor-order/burger-constructor-order";
import style from "./burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIngredientsContext } from "../../context/burger-ingredients-context";
import { BurgerConstructorContext } from "../../context/burger-constructor-context";

export default function BurgerConstructor() {
  const ingredients = useContext(BurgerIngredientsContext);

  // eslint-disable-next-line no-unused-vars
  const { constructorContext, setConstructorContext } = useContext(
    BurgerConstructorContext
  );

  const randomIngredients = useMemo(() => {
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
  }, [randomBun, randomFilling]);

  useEffect(() => {
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
  }, []);

  return (
    <div className={style.container}>
      <ul className={style.lists}>
        {/* {constructorContext.buns.map(item)} */}
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${randomBun.name} (верх)`}
          price={randomBun.price}
          extraClass="ml-8"
          thumbnail={randomBun.image}
        />
        <ul className={style.container_constructor}>
          {constructorContext.ingredients.map((item) => {
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
          })}
        </ul>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${randomBun.name} (низ)`}
          price={randomBun.price}
          extraClass="ml-8"
          thumbnail={randomBun.image}
        />
      </ul>
      <BurgerConstructorOrder />
    </div>
  );
}
