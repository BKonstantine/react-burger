import { FC } from "react";
import { useSelector } from "../../services/hooks";
import { useParams } from "react-router-dom";
import cn from "classnames";
import style from "./ingredient-details.module.css";

interface IIngredientDetails {
  titleClassName?: string;
  subtitleClassName?: string;
}

const IngredientDetails: FC<IIngredientDetails> = ({
  titleClassName,
  subtitleClassName,
}) => {
  const ingredients = useSelector(
    (store) => store.burgerIngredientsReducer.burgerIngredientsList
  );

  const { id } = useParams();

  const ingredient = ingredients.find((item) => item._id === id);

  return (
    <>
      {ingredient && (
        <>
          <p
            className={`${cn(
              style.title,
              titleClassName
            )} text text_type_main-large`}
          >
            Детали ингредиента
          </p>
          <img
            className={style.image}
            src={ingredient?.image_large}
            alt={ingredient?.name}
          />
          <p
            className={`${cn(
              style.subtitle,
              subtitleClassName
            )} text text_type_main-medium`}
          >
            {ingredient?.name}
          </p>
          <ul className={style.container}>
            <li className={style.item}>
              <p className="text text_type_main-default">Калории,ккал</p>
              <p className="text text_type_digits-default mt-2">
                {ingredient?.calories}
              </p>
            </li>
            <li className={style.item}>
              <p className="text text_type_main-default">Белки, г</p>
              <p className="text text_type_digits-default mt-2">
                {ingredient?.proteins}
              </p>
            </li>
            <li className={style.item}>
              <p className="text text_type_main-default">Жиры, г</p>
              <p className="text text_type_digits-default mt-2">
                {ingredient?.fat}
              </p>
            </li>
            <li className={style.item}>
              <p className="text text_type_main-default">Углеводы, г</p>
              <p className="text text_type_digits-default mt-2">
                {ingredient?.carbohydrates}
              </p>
            </li>
          </ul>
        </>
      )}
    </>
  );
};

export default IngredientDetails;
