import { Outlet } from "react-router";
import { MenuHeader } from "../components/MenuHeader";

export function RootLayout() {
  return (
    <>
      <MenuHeader />
      <Outlet />
    </>
  );
}
