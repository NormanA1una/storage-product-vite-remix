import { NavigateFunction } from "@remix-run/react";
import { Paragraph } from "~/components/typography/paragraph";
import { useCart } from "~/context/cart-context";

type CartNavProps = {
  navigate: NavigateFunction;
};

export const CartNav = ({ navigate }: CartNavProps) => {
  const { cart } = useCart();

  return (
    <div
      onClick={() => navigate({ pathname: "/cart" })}
      className="cursor-pointer relative pr-3"
    >
      <Paragraph style={{ color: "#fff" }}>Carrito 🛒 </Paragraph>
      <span
        className={`bg-red-600 p-2 rounded-full text-xs text-[#fff] absolute -top-1 ${
          cart.length > 9 ? "-right-4" : "-right-3"
        }`}
      >
        {cart.length}
      </span>
    </div>
  );
};
