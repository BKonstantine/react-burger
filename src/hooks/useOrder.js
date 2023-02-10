import { useSelector } from "react-redux";

export default function useOrder() {
  const ingredients = useSelector(
    (store) => store.burgerIngredientsReducer.burgerIngredientsList
  );

  function orderIngredientsList(ingredientsIdList) {
    const orderIngredientsList = ingredients.filter((ingredient) => {
      return ingredientsIdList.find(
        (ingredientId) => ingredientId === ingredient._id
      );
    });

    return orderIngredientsList;
  }

  return { orderIngredientsList };
}
