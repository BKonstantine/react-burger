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
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegistrationPage />} />
            </Routes>
          </DndProvider>
        </>
      )}
    </>
  );
}
