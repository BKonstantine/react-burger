import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIngridients } from "../../services/actions/burgerIngredientsAction";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "../../pages/main-page/main-page";
import LoginPage from "../../pages/login-page/login-page";
import RegistrationPage from "../../pages/registration-page/registration-page";
import ForgotPasswordPage from "../../pages/forgot-password-page/forgot-password-page";
import ResetPasswordPage from "../../pages/reset-password-page/reset-password-page";
import NotFoundPage from "../../pages/not-found-page/not-found-page";
import ProfilePage from "../../pages/profile-page/profile-page";
import OrderListPage from "../../pages/order-list-page/order-list-page";
import ProtectedRoute from "../protected-route/protected-route";
import OrderPage from "../../pages/order-page/order-page";
import IngredientPage from "../../pages/ingredient-page/ingredient-page";
import { checkUserAccess } from "../../services/actions/userAction";

export default function App() {
  const dispatch = useDispatch();

  const { isAuth, resetEmailSent } = useSelector((store) => ({
    isAuth: store.userReducer.isAuth,
    resetEmailSent: store.userReducer.resetEmailSent,
  }));

  useEffect(() => {
    dispatch(getIngridients());
    dispatch(checkUserAccess());
  }, []);

  const router = createBrowserRouter([
    { path: "/", element: <MainPage /> },
    {
      path: "/order_list",
      element: (
        <ProtectedRoute isAuth={isAuth} to="/login">
          <OrderListPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/profile",
      element: (
        <ProtectedRoute isAuth={isAuth} to="/login">
          <ProfilePage />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "order-page",
          element: <OrderPage />,
        },
      ],
    },
    {
      path: "/login",
      element: (
        <ProtectedRoute isAuth={!isAuth} to="/">
          <LoginPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/register",
      element: (
        <ProtectedRoute isAuth={!isAuth} to="/">
          <RegistrationPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/forgot-password",
      element: (
        <ProtectedRoute isAuth={!isAuth} to="/">
          <ForgotPasswordPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/reset-password",
      element: (
        <ProtectedRoute isAuth={resetEmailSent} to="/login">
          <ResetPasswordPage />
        </ProtectedRoute>
      ),
    },
    { path: "/ingredients/:id", element: <IngredientPage /> },
    { path: "*", element: <NotFoundPage /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
