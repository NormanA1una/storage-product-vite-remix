import { LogoSection } from "./logo-section";
import { CartNav } from "./carrito";
import { useNavigate } from "@remix-run/react";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0E8499] py-3 px-6 flex items-center justify-between cursor-pointer">
      <LogoSection navigate={navigate} />
      <CartNav navigate={navigate} />
    </nav>
  );
};
