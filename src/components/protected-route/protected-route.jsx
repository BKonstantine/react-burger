import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute({ element, to }) {
  const isAuth = useSelector((store) => store.userReducer.isAuth);

  return isAuth ? element : <Navigate to={to} replace />;
}
