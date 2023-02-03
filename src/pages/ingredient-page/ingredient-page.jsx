import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import style from "./ingredient-page.module.css";

export default function IngredientPage() {
  const ingredients = useSelector(
    (store) => store.burgerIngredientsReducer.burgerIngredientsList
  );

  const { id } = useParams();

  const currentIngredient = ingredients.find((item) => item._id === id);

  return (
    currentIngredient && (
      <main className={style.main}>
        <div className={style.container}>
          <IngredientDetails
            ingredient={currentIngredient}
            titleClassName={style.title}
            subtitleClassName={style.subtitle}
          />
        </div>
      </main>
    )
  );
}
