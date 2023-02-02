import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ element, to, isAuth }) { 
  return isAuth ? element : <Navigate to={to} replace />;
}
