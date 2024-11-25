import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/store/store";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} from "~/store/features/cartSlice";

export const useCartActions = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);

  return {
    cart,
    addItem: (product: CartProduct) => dispatch(addToCart(product)),
    removeItem: (productName: string) => dispatch(removeFromCart(productName)),
    updateItemQuantity: (name: string, amount: number) =>
      dispatch(updateQuantity({ name, amount })),
    clearCart: () => dispatch(clearCart()),
  };
};
