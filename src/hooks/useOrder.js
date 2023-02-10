import { useSelector } from "react-redux";

export default function useOrder(ingredientsIdList) {
  const ingredients = useSelector(
    (store) => store.burgerIngredientsReducer.burgerIngredientsList
  );

  const getOrderIngredientsList = () =>
    ingredients.filter((ingredient) => {
      return ingredientsIdList.find(
        (ingredientId) => ingredientId === ingredient._id
      );
    });

  const orderIngredientsList = getOrderIngredientsList();

  const orderPrice = orderIngredientsList.reduce((count, item) => {
    return count + item.price;
  }, 0);

  return { orderIngredientsList, orderPrice };
}
