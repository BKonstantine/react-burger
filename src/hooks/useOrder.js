import { useSelector } from "react-redux";

export default function useOrder(ingredientsIdList) {
  const ingredients = useSelector(
    (store) => store.burgerIngredientsReducer.burgerIngredientsList
  );  

  const getOrderIngredientsList = () => {
    const list = [];
    ingredientsIdList.forEach((ingredientId) => {
      ingredients.forEach((ingredient) => {
        if (ingredient._id === ingredientId) {
          list.push(ingredient);
        }
      });
    });    
    return list;
  };

  const orderIngredientsList = getOrderIngredientsList();

  const orderPrice = orderIngredientsList.reduce((count, item) => {
    return count + item.price;
  }, 0);

  return { orderIngredientsList, orderPrice };
}
