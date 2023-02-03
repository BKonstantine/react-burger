import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppHeader from "../app-header/app-header";
import { getIngridients } from "../../services/actions/burgerIngredientsAction";
import Preloader from "../preloader/preloader";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Routes, Route, useNavigate } from "react-router-dom";
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
import { getCookie } from "../../utils/cookie";

export default function App() {
  const dispatch = useDispatch();
  const accessToken = getCookie("accessToken"); 

  const { loading, error, errorText, isAuth, resetEmailSent } = useSelector(
    (store) => ({
      loading: store.burgerIngredientsReducer.burgerIngredientsListRequest,
      error: store.burgerIngredientsReducer.burgerIngredientsListFailed,
      errorText: store.burgerIngredientsReducer.burgerIngredientsListFailedText,
      isAuth: store.userReducer.isAuth,
      resetEmailSent: store.userReducer.resetEmailSent,
    })
  );

  useEffect(() => {
    dispatch(checkUserAccess(accessToken));
  }, [accessToken]);

  useEffect(() => {
    dispatch(getIngridients());
  }, []);

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
              
                <Route path="/" element={<MainPage />} />
                <Route
                  path="/order_list"
                  element={
                    <ProtectedRoute
                      isAuth={isAuth}
                      to="/login"
                      element={<OrderListPage />}
                    />
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute
                      isAuth={isAuth}
                      to="/login"
                      element={<ProfilePage />}
                    />
                  }
                >
                  <Route path="order-page" element={<OrderPage />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route
                  path="/forgot-password"
                  element={
                    <ProtectedRoute
                      isAuth={!resetEmailSent}
                      to="/reset-password"
                      element={<ForgotPasswordPage />}
                    />
                  }
                />
                <Route />
                <Route
                  path="/reset-password"
                  element={
                    <ProtectedRoute
                      isAuth={resetEmailSent}
                      to="/login"
                      element={<ResetPasswordPage />}
                    />
                  }
                />
                <Route path="/ingredients/:id" element={<IngredientPage />} />
                <Route path="*" element={<NotFoundPage />} />
              
            </Routes>
          </DndProvider>
        </>
      )}
    </>
  );
}
