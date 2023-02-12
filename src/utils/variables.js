import { getCookie } from "./cookie";

const BASE_API_URL = "https://norma.nomoreparties.space/api";
const BASE_WS_URL = "wss://norma.nomoreparties.space/orders";
const INGREDIENTS_URL = `${BASE_API_URL}/ingredients`;
const ORDER_URL = `${BASE_API_URL}/orders`;
const REGISTER_URL = `${BASE_API_URL}/auth/register`;
const LOGIN_URL = `${BASE_API_URL}/auth/login`;
const LOGOUT_URL = `${BASE_API_URL}/auth/logout`;
const TOKEN_URL = `${BASE_API_URL}/auth/token`;
const CHECK_ACCESS_URL = `${BASE_API_URL}/auth/user`;
const FORGOT_PASSWORD_URL = `${BASE_API_URL}/password-reset`;
const RESET_PASSWORD_URL = `${BASE_API_URL}/password-reset/reset`;

const WS_URL_ALL = `${BASE_WS_URL}/all`;
const WS_URL_PROFILE = `${BASE_WS_URL}?token=${getCookie("accessToken")}`;

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
  WS_URL_ALL,
  WS_URL_PROFILE,
};
