import { Outlet } from "@remix-run/react";
import { Navbar } from "../navbar";
import { useState } from "react";
import { CartProvider } from "~/context/cart-context";

export default function MainLayout() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Outlet />
      </CartProvider>
    </>
  );
}
