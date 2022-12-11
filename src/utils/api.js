import { INGREDIENTS_URL } from "./variables";

const checkReponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export default function getIngridients() {
  return fetch(INGREDIENTS_URL).then(checkReponse);
}
