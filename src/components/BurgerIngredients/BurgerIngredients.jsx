import React from "react";
import style from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

export default function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState("one");
  return (
    <div className={style.container}>
      <p className="text text_type_main-large pt-10 pb-5">Соберите бургер</p>
      <div style={{ display: "flex" }}>
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "three"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={`${style.container_ingredients} mt-10`}>
        <p className="text text_type_main-medium pb-6">Булки</p>
        <div className={style.container_items}></div>
        <p className="text text_type_main-medium pb-6">Соусы</p>
        <div className={style.container_items}></div>
        <p className="text text_type_main-medium pb-6">Начинки</p>
        <div className={style.container_items}></div>
      </div>
    </div>
  );
}
