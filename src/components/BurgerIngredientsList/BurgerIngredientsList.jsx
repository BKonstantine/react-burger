import React from "react";
import Card from "../Card/Card";
import { data } from "../../utils/data";
import style from "./BurgerIngredientsList.module.css";

const BurgerIngredientsList = React.forwardRef(({ title, type, id }, ref) => {
  return (
    <>
      <p ref={ref} id={id} className="text text_type_main-medium pb-6">
        {title}
      </p>
      <ul className={`${style.container} pl-4 pr-4`}>
        {data.map((item) => {
          if (item.type === type) {
            return <Card key={item._id} {...item} />;
          }
        })}
      </ul>
    </>
  );
});

export default BurgerIngredientsList;
