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
    <main className={style.main}>
      <IngredientDetails ingredient={currentIngredient} />
    </main>
  );
}
