const BASE_API_URL = "https://norma.nomoreparties.space/api";
const INGREDIENTS_URL = `${BASE_API_URL}/ingredients`;
const ORDER_URL = `${BASE_API_URL}/orders`;
const REGISTER_URL = `${BASE_API_URL}/auth/register`;
const LOGIN_URL = `${BASE_API_URL}/auth/login`;
const LOGOUT_URL = `${BASE_API_URL}/auth/logout`;
const TOKEN_URL = `${BASE_API_URL}/auth/token`;
const CHECK_ACCESS_URL = `/auth/user`;
const FORGOT_PASSWORD_URL = `${BASE_API_URL}/password-reset`;
const RESET_PASSWORD_URL = `${BASE_API_URL}/password-reset/reset`;

export {
  INGREDIENTS_URL,
  ORDER_URL,
  REGISTER_URL,
  LOGIN_URL,
  LOGOUT_URL,
  TOKEN_URL,
  CHECK_ACCESS_URL,
  FORGOT_PASSWORD_URL,
  RESET_PASSWORD_URL,
};
