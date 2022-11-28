import React from "react";
import BurgerIngredientsList from "../BurgerIngredientsList/BurgerIngredientsList";
import style from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useInView } from "react-intersection-observer";

export default function BurgerIngredients() {
  const [current, setCurrent] = React.useState("one");

  const [oneTabRef, inViewTabOne] = useInView({ threshold: 0 });
  const [twoTabRef, inViewTabTwo] = useInView({ threshold: 0 });
  const [threeTabRef, inViewTabThree] = useInView({ threshold: 0 });

  React.useEffect(() => {
    if (inViewTabOne) {
      setCurrent("one");
    } else if (inViewTabTwo) {
      setCurrent("two");
    } else {
      setCurrent("three");
    }
  }, [inViewTabOne, inViewTabTwo, inViewTabThree]);

  function changeIngredients(id) {
    setCurrent(id);
    document.querySelector(`#${id}`).scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={style.container}>
      <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
      <div style={{ display: "flex" }}>
        <Tab value="one" active={current === "one"} onClick={changeIngredients}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"} onClick={changeIngredients}>
          Соусы
        </Tab>
        <Tab
          value="three"
          active={current === "three"}
          onClick={changeIngredients}
        >
          Начинки
        </Tab>
      </div>
      <div className={`${style.container_ingredients} mt-10`}>
        <BurgerIngredientsList
          title="Булки"
          id="one"          
          type="bun"
          ref={oneTabRef}
        />
        <BurgerIngredientsList
          title="Соусы"
          id="two"          
          type="sauce"
          ref={twoTabRef}
        />
        <BurgerIngredientsList
          title="Начинки"
          id="three"          
          type="main"
          ref={threeTabRef}
        />
      </div>
    </div>
  );
}
