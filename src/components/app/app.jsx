import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppHeader from "../app-header/app-header";
import { getIngridients } from "../../services/actions/burgerIngredientsAction";
import Preloader from "../preloader/preloader";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Routes, Route } from "react-router-dom";
import MainPage from "../../pages/main-page/main-page";
import LoginPage from "../../pages/login-page/login-page";
import RegistrationPage from "../../pages/registration-page/registration-page";
import ForgotPasswordPage from "../../pages/forgot-password-page/forgot-password-page";
import ResetPasswordPage from "../../pages/reset-password-page/reset-password-page";
import NotFoundPage from "../../pages/not-found-page/not-found-page";
import ProfilePage from "../../pages/profile-page/profile-page";
import OrderListPage from "../../pages/order-list-page/order-list-page";
import ProtectedRoute from "../protected-route/protected-route";

export default function App() {
  const dispatch = useDispatch();

  const { loading, error, errorText } = useSelector((store) => ({
    loading: store.burgerIngredientsReducer.burgerIngredientsListRequest,
    error: store.burgerIngredientsReducer.burgerIngredientsListFailed,
    errorText: store.burgerIngredientsReducer.burgerIngredientsListFailedText,
  }));

  useEffect(() => {
    dispatch(getIngridients());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Preloader loading={loading} />
      ) : error ? (
        <Preloader error={error} errorText={errorText} />
      ) : (
        <>
          <AppHeader />
          <DndProvider backend={HTML5Backend}>
            <Routes>
              <Route exact path="/" element={<MainPage />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route
                path="/order_list"
                element={<ProtectedRoute to="/login" element={<OrderListPage />} />}
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute to="/login" element={<ProfilePage />} />
                }
              />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegistrationPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/reset-password" element={<ResetPasswordPage />} />
            </Routes>
          </DndProvider>
        </>
      )}
    </>
  );
}
