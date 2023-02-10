import { Outlet } from "react-router-dom";
import AppHeader from "../components/app-header/app-header";

export default function Wrapper() {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
}
