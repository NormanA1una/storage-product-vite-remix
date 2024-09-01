import { useOutletContext } from "@remix-run/react";
import { Cart } from "~/layouts/shopping-cart/cart";
import { HeroCart } from "~/layouts/shopping-cart/hero";

export default function CartPage() {
  const data: DataContext = useOutletContext();

  return (
    <>
      <HeroCart />
      <Cart phoneNumber={data.phoneNumber} />
    </>
  );
}
