import { INGREDIENTS_URL, ORDER_URL } from "./variables";

const checkReponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

function getIngridientsRequest() {
  return fetch(INGREDIENTS_URL).then(checkReponse);
}

function sendOrderRequest(idList) {
  return fetch(ORDER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "ingredients": idList,
    }),
  }).then(checkReponse);
}

export { getIngridientsRequest, sendOrderRequest };
