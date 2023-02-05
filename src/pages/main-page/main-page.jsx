import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../../components/modal/modal";
import { RESET_CURRENT_INGREDIENT } from "../../services/actions/currentIngredientAction";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import style from "./main-page.module.css";

export default function MainPage() {
  const dispatch = useDispatch();

  const currenIngredient = useSelector(
    (store) => store.currentIngredientReducer.currentIngredient
  );

  function closeModal(e) {
    e.stopPropagation();
    dispatch({ type: RESET_CURRENT_INGREDIENT });
  }

  return (
    <main className={style.main}>
      <BurgerIngredients />
      <BurgerConstructor />
      {currenIngredient && (
        <Modal onCloseModal={closeModal}>
          <IngredientDetails ingredient={currenIngredient} />
        </Modal>
      )}
    </main>
  );
}
