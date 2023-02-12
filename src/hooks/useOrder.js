import { useSelector } from "react-redux";

export default function useOrder(order) {
  const ingredients = useSelector(
    (store) => store.burgerIngredientsReducer.burgerIngredientsList
  );

  const getOrderIngredientsList = () => {
    const list = [];
    order.ingredients.forEach((ingredientId) => {
      ingredients.forEach((ingredient) => {
        if (ingredient._id === ingredientId) {
          list.push(ingredient);
        }
      });
    });

    return list;
  };

  const getOrderStatus = () => {
    if (order.status === "done") {
      return "Выполнен";
    } else {
      return "Готовится";
    }
  };

  const orderStatus = getOrderStatus();

  const orderIngredientsList = getOrderIngredientsList();

  const orderPrice = orderIngredientsList.reduce((count, item) => {
    return count + item.price;
  }, 0);

  return { orderIngredientsList, orderPrice, orderStatus };
}
