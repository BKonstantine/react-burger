import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RESET_CURRENT_INGREDIENT } from "../../services/actions/currentIngredientAction";
import AppHeader from "../../components/app-header/app-header";
import AppMain from "../../components/app-main/app-main";
import Modal from "../../components/modal/modal";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";

export default function MainPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currenIngredient = useSelector(
    (store) => store.currentIngredientReducer.currentIngredient
  );

  function closeModal(e) {
    e.stopPropagation();
    dispatch({ type: RESET_CURRENT_INGREDIENT });
    navigate("/");
  }

  return (
    <>
      <AppHeader />
      <AppMain />
      {currenIngredient && (
        <Modal onCloseModal={closeModal}>
          <IngredientDetails ingredient={currenIngredient} />
        </Modal>
      )}
    </>
  );
}
