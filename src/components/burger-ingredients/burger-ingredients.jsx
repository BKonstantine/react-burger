import { useMemo, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BurgerIngredientsList from "../burger-ingredients-list/burger-ingredients-list";
import style from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useInView } from "react-intersection-observer";
import Modal from "../modal/modal";
import {  
  RESET_CURRENT_INGREDIENT,
} from "../../services/actions/currentIngredientAction";
import IngredientDetails from "../ingredient-details/ingredient-details";

export default function BurgerIngredients() {
  const [current, setCurrent] = useState("one");

  const [bunTabRef, inViewTabBun] = useInView({ threshold: 0 });
  const [sauceTabRef, inViewTabSauce] = useInView({ threshold: 0 });
  const [mainTabRef, inViewTabMain] = useInView({ threshold: 0 });

  const ingredients = useSelector(
    (store) => store.burgerIngredientsReducer.burgerIngredientsList
  );

  const dispatch = useDispatch();

  const { buns, mains, sauces } = useMemo(() => {
    return ingredients.reduce(
      (count, item) => {
        // eslint-disable-next-line default-case
        switch (item.type) {
          case "bun":
            count.buns.push(item);
            break;
          case "sauce":
            count.sauces.push(item);
            break;
          case "main":
            count.mains.push(item);
            break;
        }
        return count;
      },
      { buns: [], mains: [], sauces: [] }
    );
  }, [ingredients]);

  useEffect(() => {
    if (inViewTabBun) {
      setCurrent("bun");
    } else if (inViewTabSauce) {
      setCurrent("sauce");
    } else {
      setCurrent("main");
    }
  }, [inViewTabBun, inViewTabSauce, inViewTabMain]);

  function changeIngredients(id) {
    setCurrent(id);
    document.querySelector(`#${id}`).scrollIntoView({ behavior: "smooth" });
  }

  const currenIngredient = useSelector(
    (store) => store.currentIngredientReducer.currentIngredient
  );

  function closeModal(e) {
    e.stopPropagation();
    dispatch({ type: RESET_CURRENT_INGREDIENT });
  }

  return (
    <div className={style.container}>
      <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
      <div className={style.tab}>
        <Tab value="bun" active={current === "bun"} onClick={changeIngredients}>
          Булки
        </Tab>
        <Tab
          value="sauce"
          active={current === "sauce"}
          onClick={changeIngredients}
        >
          Соусы
        </Tab>
        <Tab
          value="main"
          active={current === "main"}
          onClick={changeIngredients}
        >
          Начинки
        </Tab>
      </div>
      <div className={style.container_ingredients}>
        <BurgerIngredientsList
          title="Булки"
          id="bun"
          type="bun"
          ref={bunTabRef}
          ingredients={buns}
        />
        <BurgerIngredientsList
          title="Соусы"
          id="sauce"
          type="sauce"
          ref={sauceTabRef}
          ingredients={sauces}
        />
        <BurgerIngredientsList
          title="Начинки"
          id="main"
          type="main"
          ref={mainTabRef}
          ingredients={mains}
        />
      </div>
      {currenIngredient && (
        <Modal onCloseModal={closeModal}>
          <IngredientDetails />
        </Modal>
      )}
    </div>
  );
}
