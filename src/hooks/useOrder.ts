import { useSelector } from "../services/hooks";
import { IOrder, IIngredient } from "../services/types/data";

export default function useOrder(order: IOrder | undefined) {
  const ingredients = useSelector(
    (store) => store.burgerIngredientsReducer.burgerIngredientsList
  );

  const getOrderIngredientsList = () => {
    const list: Array<IIngredient> = [];
    order?.ingredients.forEach((ingredientId) => {
      ingredients.forEach((ingredient) => {
        if (ingredient._id === ingredientId) {
          list.push(ingredient);
        }
      });
    });

    return list;
  };

  const getOrderStatus = () => {
    if (order?.status === "done") {
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

  const curOffset = new Date().getTimezoneOffset() / 60;
  const GMT = "i-GTM" + (curOffset > 0 ? "-" + curOffset : "+" + -curOffset);

  return { orderIngredientsList, orderPrice, orderStatus, GMT };
}
