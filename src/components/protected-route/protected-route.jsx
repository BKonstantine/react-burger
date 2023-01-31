import { Route } from "react-router-dom";

export default function ProtectedRoute({ children, isAuth }) {
  return <Route>{children}</Route>;
}
