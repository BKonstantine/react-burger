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
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { checkUserAccess } from "../../services/actions/userAction";
import Wrapper from "../../pages/wrapper";
import BurgerDetails from "../burger-details/burger-details";

export default function App() {
  const dispatch = useDispatch();

  const location = useLocation();

  const background =
    location.state?.locationIngredient ||
    location.state?.locationFeed ||
    location.state?.locationProfile ||
    location;

  const { isAuth, resetEmailSent } = useSelector((store) => ({
    isAuth: store.userReducer.isAuth,
    resetEmailSent: store.userReducer.resetEmailSent,
  }));

  useEffect(() => {
    dispatch(getIngridients());
    dispatch(checkUserAccess());
  }, []);

  return (
    <>
      <Routes location={background}>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<MainPage />} />
          <Route path="feed" element={<FeedPage />} />
          <Route path="feed/:id" element={<OrderPage />} />
          <Route
            path="profile"
            element={
              <ProtectedRoute isAuth={isAuth} to="/login">
                <ProfilePage />
              </ProtectedRoute>
            }
          >
            <Route path="orders" element={<UserOrderPage />} />
          </Route>
          <Route
            path="profile/orders/:id"
            element={
              <ProtectedRoute isAuth={!isAuth} to="/login">
                <OrderPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="login"
            element={
              <ProtectedRoute isAuth={!isAuth} to="/">
                <LoginPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="register"
            element={
              <ProtectedRoute isAuth={!isAuth} to="/">
                <RegistrationPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="forgot-password"
            element={
              <ProtectedRoute isAuth={!isAuth} to="/">
                <ForgotPasswordPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="reset-password"
            element={
              <ProtectedRoute isAuth={resetEmailSent} to="/login">
                <ResetPasswordPage />
              </ProtectedRoute>
            }
          />
          <Route path="ingredients/:id" element={<IngredientPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      {location.state?.locationIngredient && (
        <Routes>
          <Route
            path="/ingredients/:id"
            element={
              <Modal route>
                <IngredientDetails />
              </Modal>
            }
          />
        </Routes>
      )}
      {location.state?.locationFeed && (
        <Routes>
          <Route
            path="/feed/:id"
            element={
              <Modal route>
                <BurgerDetails />
              </Modal>
            }
          />
        </Routes>
      )}
      {location.state?.locationProfile && (
        <Routes>
          <Route
            path="/profile/orders/:id"
            element={
              <Modal route>
                <BurgerDetails />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
}
