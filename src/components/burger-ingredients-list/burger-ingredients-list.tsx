import { forwardRef } from "react";
import Card from "../card/card";
import style from "./burger-ingredients-list.module.css";
import { IIngredient } from "../../services/types/data";

interface IBurgerIngredientsList {
  title: string;
  id: string;
  type: string;
  ingredients: Array<IIngredient>;
}
type ref = HTMLParagraphElement;

const BurgerIngredientsList = forwardRef<ref, IBurgerIngredientsList>(
  (props, ref) => {
    return (
      <>
        <p ref={ref} id={props.id} className="text text_type_main-medium pb-6">
          {props.title}
        </p>
        <ul className={style.container}>
          {props.ingredients.map((item) => {
            return <Card key={item._id} ingredient={item} />;
          })}
        </ul>
      </>
    );
  }
);

export default BurgerIngredientsList;
