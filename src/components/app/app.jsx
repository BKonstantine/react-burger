import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIngridients } from "../../services/actions/burgerIngredientsAction";
import { Routes, Route, useLocation } from "react-router-dom";
import MainPage from "../../pages/main-page/main-page";
import LoginPage from "../../pages/login-page/login-page";
import RegistrationPage from "../../pages/registration-page/registration-page";
import ForgotPasswordPage from "../../pages/forgot-password-page/forgot-password-page";
import ResetPasswordPage from "../../pages/reset-password-page/reset-password-page";
import NotFoundPage from "../../pages/not-found-page/not-found-page";
import ProfilePage from "../../pages/profile-page/profile-page";
import FeedPage from "../../pages/feed-page/feed-page";
import OrderPage from "../../pages/order-page/order-page";
import ProtectedRoute from "../protected-route/protected-route";
import UserOrderPage from "../../pages/user-order-page/user-order-page";
import IngredientPage from "../../pages/ingredient-page/ingredient-page";
import { checkUserAccess } from "../../services/actions/userAction";
import Wrapper from "../../pages/wrapper";

export default function App() {
  const dispatch = useDispatch();

  const location = useLocation();

  const background = location;

  const { isAuth, resetEmailSent } = useSelector((store) => ({
    isAuth: store.userReducer.isAuth,
    resetEmailSent: store.userReducer.resetEmailSent,
  }));

  useEffect(() => {
    dispatch(getIngridients());
    dispatch(checkUserAccess());
  }, []);

  const router = [
    {
      path: "/profile",      
      children: [
        {
          path: "order-page",
          element: <UserOrderPage />,
        },
      ],
    },
    {
      path: "/login",
      
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
  ];

  return (
    <Routes location={background}>
      <Route path="/" element={<Wrapper />}>
        <Route index element={<MainPage />} />
        <Route path="feed" element={<FeedPage />} />
        <Route path="profile" element={<ProtectedRoute isAuth={isAuth} to="/login"><ProfilePage /></ProtectedRoute>}/>        
        <Route path="login" element={<ProtectedRoute isAuth={!isAuth} to="/"><LoginPage /></ProtectedRoute>}/>


        {/* <Route path="feed/:id" element={<OrderPage />} /> */}
      </Route>
    </Routes>
  );
}
