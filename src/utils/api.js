import {
  INGREDIENTS_URL,
  ORDER_URL,
  REGISTER_URL,
  LOGIN_URL,
  LOGOUT_URL,
  TOKEN_URL,
  CHECK_ACCESS_URL,
  FORGOT_PASSWORD_URL,
  RESET_PASSWORD_URL,
} from "./variables";

const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
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

// TODO: Выход пользователя из аккаунта
function logoutUserRequest(refreshToken) {
  return fetch(LOGOUT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: refreshToken,
    }),
  }).then(checkResponse);
}

// TODO: Запрос данных пользователя
function checkUserAccessRequest(accessToken) {
  return fetch(CHECK_ACCESS_URL, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${accessToken}`,
    },
  }).then(checkResponse);
}

// TODO: Запрос обновления токена
function refreshTokenRequest(refreshToken) {
  return fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: refreshToken,
    }),
  }).then(checkResponse);
}

// TODO: Запрос на восстановление пароля
function forgotPasswordRequest(email) {
  return fetch(FORGOT_PASSWORD_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  }).then(checkResponse);
}

function resetPasswordRequest(userDate) {
  return fetch(RESET_PASSWORD_URL, {
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
  checkUserAccessRequest,
  refreshTokenRequest,
  logoutUserRequest,
  forgotPasswordRequest,
  resetPasswordRequest,
};
