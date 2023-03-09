import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

// TODO: уточнить тип children
interface IProtectedRoute {
  children: ReactNode;
  to: string;
  isAuth?: boolean;
}

const ProtectedRoute: FC<IProtectedRoute> = ({ children, to, isAuth }) => {
  return <>{isAuth ? children : <Navigate to={to} replace />}</>;
};

export default ProtectedRoute;
