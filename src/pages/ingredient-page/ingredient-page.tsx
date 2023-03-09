import { FC } from "react";
import { useSelector } from "../../services/hooks";
import { useParams, useLocation } from "react-router-dom";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import MainPage from "../main-page/main-page";
import style from "./ingredient-page.module.css";

const IngredientPage: FC = () => {
  const ingredients = useSelector(
    (store) => store.burgerIngredientsReducer.burgerIngredientsList
  );

  const { id } = useParams();

  const currentIngredient = ingredients.find((item) => item._id === id);

  const location = useLocation();

  return (
    <>
      {location.state?.from === "/" ? (
        <MainPage />
      ) : (
        currentIngredient && (
          <>
            <main className={style.main}>
              <div className={style.container}>
                <IngredientDetails
                  titleClassName={style.title}
                  subtitleClassName={style.subtitle}
                />
              </div>
            </main>
          </>
        )
      )}
    </>
  );
};

export default IngredientPage;
