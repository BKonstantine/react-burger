import {
  INGREDIENTS_URL,
  ORDER_URL,
  REGISTER_URL,
  LOGIN_URL,
  LOGOUT_URL,
  TOKEN_URL,
} from "./variables";

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

// TODO: Запрос списка ингредиентов
function getIngridientsRequest() {
  return fetch(INGREDIENTS_URL).then(checkResponse);
}

// TODO: Создание заказа
function sendOrderRequest(idList) {
  return fetch(ORDER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ingredients: idList,
    }),
  }).then(checkResponse);
}

// ТОDO: Регистрация пользователя
function registerUserRequest(userDate) {
  return fetch(REGISTER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDate),
  }).then(checkResponse);
}

// TODO: Авторизация пользователя
function loginUserRequest(userDate) {
  return fetch(LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDate),
  }).then(checkResponse);
}

export {
  getIngridientsRequest,
  sendOrderRequest,
  registerUserRequest,
  loginUserRequest,
};
