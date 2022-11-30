import React from "react";
import Card from "../card/card";
import style from "./burger-ingredients-list.module.css";
import PropTypes from "prop-types";

const BurgerIngredientsList = React.forwardRef((props, ref) => {
  return (
    <>
      <p ref={ref} id={props.id} className="text text_type_main-medium pb-6">
        {props.title}
      </p>
      <ul className={style.container}>
        {props.ingredient.map((item) => {
          return <Card key={item._id} ingredient={item} />;
        })}
      </ul>
    </>
  );
});

BurgerIngredientsList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default BurgerIngredientsList;
