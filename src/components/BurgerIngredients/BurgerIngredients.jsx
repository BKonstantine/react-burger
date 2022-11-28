import React from "react";
import Card from "../Card/Card";
import { data } from "../../utils/data";
import style from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

export default function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState("one");

  function filterData(data, type) {
    if (data.type === type) {
      return <Card key={data._id} {...data} />;
    }
  }
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
        <ul className={`${style.container_items} pl-4 pr-4`}>
          {data.map((item) => filterData(item, "bun"))}
        </ul>
        <p className="text text_type_main-medium pb-6">Соусы</p>
        <ul className={`${style.container_items} mb-10 pl-4 pr-4`}>
          {data.map((item) => filterData(item, "sauce"))}
        </ul>
        <p className="text text_type_main-medium pb-6">Начинки</p>
        <ul className={`${style.container_items} pl-4 pr-4`}>
          {data.map((item) => filterData(item, "main"))}
        </ul>
      </div>
    </div>
  );
}
