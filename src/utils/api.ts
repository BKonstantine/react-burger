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

const checkResponse = (res: Response) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

// TODO: Запрос списка ингредиентов
function getIngridientsRequest() {
  return fetch(INGREDIENTS_URL).then(checkResponse);
}

// TODO: Создание заказа
function sendOrderRequest(idList: Array<string>, accessToken: string) {
  return fetch(ORDER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      ingredients: idList,
    }),
  }).then(checkResponse);
}

interface IRegisterUserRequest {
  name: string;
  email: string;
  password: string;
}

// ТОDO: Регистрация пользователя
function registerUserRequest(userDate: IRegisterUserRequest) {
  return fetch(REGISTER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDate),
  }).then(checkResponse);
}

interface ILoginUserRequest {
  email: string;
  password: string;
}

// TODO: Авторизация пользователя
function loginUserRequest(userDate: ILoginUserRequest) {
  return fetch(LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDate),
  }).then(checkResponse);
}

// TODO: Выход пользователя из аккаунта
function logoutUserRequest(refreshToken: string) {
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
function checkUserAccessRequest(accessToken: string) {
  return fetch(CHECK_ACCESS_URL, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${accessToken}`,
    },
  }).then(checkResponse);
}

// TODO: Запрос обновления токена
function refreshTokenRequest(refreshToken: string) {
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

// TODO: Запросы на восстановление пароля
function forgotPasswordRequest(email: string) {
  return fetch(FORGOT_PASSWORD_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  }).then(checkResponse);
}

interface IResetPasswordRequest {
  password: string;
  token: string;
}

function resetPasswordRequest(userDate: IResetPasswordRequest) {
  return fetch(RESET_PASSWORD_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDate),
  }).then(checkResponse);
}

interface IChangeUserDataRequest {
  email: string;
  name: string;
}

// TODO: Запрос на изменение данных пользователя
function changeUserDataRequest(
  userDate: IChangeUserDataRequest,
  accessToken: string
) {
  return fetch(CHECK_ACCESS_URL, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${accessToken}`,
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
  changeUserDataRequest,
};
