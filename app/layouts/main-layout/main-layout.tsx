import { Outlet } from "@remix-run/react";
import { Navbar } from "../navbar";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
