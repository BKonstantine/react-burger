import {
  ADD_INGREDIENT,
  SORT_INGREDIENTS,
  DELETE_INGREDIENT,
  RESET_INGREDIENT,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  SET_CURRENT_INGREDIENT,
  RESET_CURRENT_INGREDIENT,
  CHANGE_USER_DATA_FORM_SUBMIT,
  CHANGE_USER_DATA_FORM_SUBMIT_FAILED,
  CHANGE_USER_DATA_FORM_SUBMIT_SUCCESS,
  FORGOT_PASSWORD_FORM_SET_VALUE,
  FORGOT_PASSWORD_FORM_SUBMIT,
  FORGOT_PASSWORD_FORM_SUBMIT_FAILED,
  FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS,
  GET_ORDER_FAILED,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  RESET_ORDER,
  RESET_PASSWORD_FORM_SET_VALUE,
  RESET_PASSWORD_FORM_SUBMIT,
  RESET_PASSWORD_FORM_SUBMIT_FAILED,
  RESET_PASSWORD_FORM_SUBMIT_SUCCESS,
  USER_ACCESS_ALLOWED,
  USER_ACCESS_DENIED,
  USER_LOGIN_FORM_SET_VALUE,
  USER_LOGIN_FORM_SUBMIT,
  USER_LOGIN_FORM_SUBMIT_FAILED,
  USER_LOGIN_FORM_SUBMIT_SUCCESS,
  USER_REGISTER_FORM_SET_VALUE,
  USER_REGISTER_FORM_SUBMIT,
  USER_REGISTER_FORM_SUBMIT_FAILED,
  USER_REGISTER_FORM_SUBMIT_SUCCESS,
  WS_CONNECTION_CLOSE,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE,
} from "../constants/index";

export interface IIngredient {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  constructorItemId?: string;
}

export interface IOrder {
  readonly _id: string;
  readonly ingredients: Array<string>;
  readonly status: string;
  readonly name: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly number: number;
}

export interface IWsMessage {
  readonly orders: Array<IOrder>;
  readonly total: number;
  readonly totalToday: number;
}

export interface IRegisterUserRequest {
  readonly name: string;
  readonly email: string;
  readonly password: string;
}

export interface ILoginUserRequest {
  readonly email: string;
  readonly password: string;
}

export interface IUser {
  readonly email: string;
  readonly name: string;
}

export interface IResetPasswordRequest {
  readonly password: string;
  readonly token: string;
}

export interface IChangeUserDataRequest {
  readonly email: string;
  readonly name: string;
}

export interface IConstructorInitialState {
  burgerConstructorBunElement: IIngredient | undefined;
  burgerConstructorFillingList: Array<IIngredient>;
}

export interface IIngredientsInitialState {
  burgerIngredientsList: Array<IIngredient>;
  burgerIngredientsListRequest: boolean;
  burgerIngredientsListFailed: boolean;
  burgerIngredientsListFailedText: string | undefined;
}

export interface ICurrentIngredientInitialState {
  currentIngredient: IIngredient | undefined;
}

export interface ICurrentOrderInitialState {
  order: undefined | number;
  orderRequest: boolean;
  orderFailed: boolean;
  orderFailedText: undefined | string;
}

export interface ISocketInitialState {
  wsConnected: boolean;
  orders: Array<IOrder>;
  total: number;
  totalToday: number;
  errorState: boolean;
  errorMessage: null | string;
}

export interface IAddIngredient {
  readonly type: typeof ADD_INGREDIENT;
  readonly id: string;
  readonly payload: IIngredient;
}

export interface ISortIngredients {
  readonly type: typeof SORT_INGREDIENTS;
  payload: Array<IIngredient>;
}

export interface IDeleteIngredient {
  readonly type: typeof DELETE_INGREDIENT;
  readonly payload: IIngredient;
}

export interface IResetIngredient {
  readonly type: typeof RESET_INGREDIENT;
}

export type TConstructorAction =
  | IAddIngredient
  | ISortIngredients
  | IDeleteIngredient
  | IResetIngredient;

export interface IGetIngredientsRequest {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  payload: Array<IIngredient>;
}

export interface IGetIngredientsFailed {
  readonly type: typeof GET_INGREDIENTS_FAILED;
  readonly errorText: string;
}

export type TIngredientsAction =
  | IGetIngredientsRequest
  | IGetIngredientsSuccess
  | IGetIngredientsFailed;

export interface ISetCurrentIngredient {
  readonly type: typeof SET_CURRENT_INGREDIENT;
  readonly payload: IIngredient;
}

export interface IResetCurrentIngredient {
  readonly type: typeof RESET_CURRENT_INGREDIENT;
}

export type TCurrenIngredientAction =
  | ISetCurrentIngredient
  | IResetCurrentIngredient;

export interface IGetOrderRequest {
  readonly type: typeof GET_ORDER_REQUEST;
}

export interface IGetOrderSuccess {
  readonly type: typeof GET_ORDER_SUCCESS;
  readonly payload: number;
}

export interface IGetOrderFailed {
  readonly type: typeof GET_ORDER_FAILED;
  readonly errorText: string;
}

export interface IResetOrder {
  readonly type: typeof RESET_ORDER;
}

export type TCurrentOrderAction =
  | IGetOrderRequest
  | IGetOrderSuccess
  | IGetOrderFailed
  | IResetOrder;

export interface IWsConnectionStart {
  readonly type: typeof WS_CONNECTION_START;
  readonly payload: string;
}

export interface IWsConnectionSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWsConnectionError {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly payload: string;
}

export interface IWsConnectionClose {
  readonly type: typeof WS_CONNECTION_CLOSE;
}

export interface IWsConnectionClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWsGetMessage {
  readonly type: typeof WS_GET_MESSAGE;
  readonly payload: IWsMessage;
}

export interface IWebSocket {
  wsInit: string;
  onOpen: string;
  onClose: string;
  onClosed: string;
  onError: string;
  onMessage: string;
}

export type TSocketAction =
  | IWsConnectionStart
  | IWsConnectionSuccess
  | IWsConnectionError
  | IWsConnectionClose
  | IWsConnectionClosed
  | IWsGetMessage;

export interface ISetRegisterFormValue {
  readonly type: typeof USER_REGISTER_FORM_SET_VALUE;
  readonly field: string;
  readonly value: string;
}

export interface IUserRegisterFormSubmit {
  readonly type: typeof USER_REGISTER_FORM_SUBMIT;
}

export interface IUserRegisterFormSubmitSuccess {
  readonly type: typeof USER_REGISTER_FORM_SUBMIT_SUCCESS;
}

export interface IUserRegisterFormSubmitFailed {
  readonly type: typeof USER_REGISTER_FORM_SUBMIT_FAILED;
}

export interface ISetLoginFormValue {
  readonly type: typeof USER_LOGIN_FORM_SET_VALUE;
  readonly field: string;
  readonly value: string;
}

export interface IUserLoginFormSubmit {
  readonly type: typeof USER_LOGIN_FORM_SUBMIT;
}

export interface IUserLoginFormSubmitSuccess {
  readonly type: typeof USER_LOGIN_FORM_SUBMIT_SUCCESS;
  readonly payload: IUser;
}

export interface IUserLoginFormSubmitFailed {
  readonly type: typeof USER_LOGIN_FORM_SUBMIT_FAILED;
}

export interface IUserAccessDenied {
  readonly type: typeof USER_ACCESS_DENIED;
}

export interface IUserAccessAllowed {
  readonly type: typeof USER_ACCESS_ALLOWED;
  readonly payload: IUser;
}

export interface ISetForgotPasswordFormValue {
  readonly type: typeof FORGOT_PASSWORD_FORM_SET_VALUE;
  readonly field: string;
  readonly value: string;
}

export interface IForgotPasswordFormSubmit {
  readonly type: typeof FORGOT_PASSWORD_FORM_SUBMIT;
}

export interface IForgotPasswordFormSubmitSuccess {
  readonly type: typeof FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS;
}

export interface IForgotPasswordFormSubmitFailed {
  readonly type: typeof FORGOT_PASSWORD_FORM_SUBMIT_FAILED;
}

export interface ISetResetPasswordFormValue {
  readonly type: typeof RESET_PASSWORD_FORM_SET_VALUE;
  readonly field: string;
  readonly value: string;
}

export interface IResetPasswordFormSubmit {
  readonly type: typeof RESET_PASSWORD_FORM_SUBMIT;
}

export interface IResetPasswordFormSubmitSuccess {
  readonly type: typeof RESET_PASSWORD_FORM_SUBMIT_SUCCESS;
}

export interface IResetPasswordFormSubmitFailed {
  readonly type: typeof RESET_PASSWORD_FORM_SUBMIT_FAILED;
}

export interface IChangeUserDataFormSubmit {
  readonly type: typeof CHANGE_USER_DATA_FORM_SUBMIT;
}

export interface IChangeUserDataFormSubmitSuccess {
  readonly type: typeof CHANGE_USER_DATA_FORM_SUBMIT_SUCCESS;
  readonly payload: IUser;
}

export interface IChangeUserDataFormSubmitFailed {
  readonly type: typeof CHANGE_USER_DATA_FORM_SUBMIT_FAILED;
}

export type TUserActions =
  | ISetRegisterFormValue
  | IUserRegisterFormSubmit
  | IUserRegisterFormSubmitSuccess
  | IUserRegisterFormSubmitFailed
  | ISetLoginFormValue
  | IUserLoginFormSubmit
  | IUserLoginFormSubmitSuccess
  | IUserLoginFormSubmitFailed
  | IUserAccessDenied
  | IUserAccessAllowed
  | ISetForgotPasswordFormValue
  | IForgotPasswordFormSubmit
  | IForgotPasswordFormSubmitSuccess
  | IForgotPasswordFormSubmitFailed
  | ISetResetPasswordFormValue
  | IResetPasswordFormSubmit
  | IResetPasswordFormSubmitSuccess
  | IResetPasswordFormSubmitFailed
  | IChangeUserDataFormSubmit
  | IChangeUserDataFormSubmitSuccess
  | IChangeUserDataFormSubmitFailed;

export interface IUserInitialState {
  registerForm: IRegisterUserRequest;
  loginForm: ILoginUserRequest;
  user: IUser;
  forgotPasswordForm: {
    email: string;
  };
  resetPasswordForm: IResetPasswordRequest;
  isAuth: undefined | boolean;
  registrationSubmit: boolean;
  registrationFailed: boolean;
  loginSubmit: boolean;
  loginFailed: boolean;
  forgotPasswordSubmit: boolean;
  forgotPasswordFailed: boolean;
  resetEmailSent: boolean;
  resetPasswordSubmit: boolean;
  resetPasswordFailed: boolean;
  changeUserDataSubmit: boolean;
  changeUserDataFailed: boolean;
}
