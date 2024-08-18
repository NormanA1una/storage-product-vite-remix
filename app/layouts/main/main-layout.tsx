import { Outlet } from "@remix-run/react";
import { Navbar } from "../navbar";
import { CartProvider } from "~/context/cart-context";
import { Footer } from "../footer";

export default function MainLayout({ pathNames }: MainLayoutProps) {
  return (
    <>
      <CartProvider>
        <Navbar pathNames={pathNames} />
        <Outlet />
        <Footer pathNames={pathNames} />
      </CartProvider>
    </>
  );
}
