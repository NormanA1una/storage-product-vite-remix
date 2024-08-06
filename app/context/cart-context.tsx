import { createContext, ReactNode, useContext, useState } from "react";

type CartContextType = {
  cart: CartProduct[];
  addToCart: (product: CartProduct) => void;
  setCart: React.Dispatch<React.SetStateAction<CartProduct[]>>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  const addToCart = (product: CartProduct) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p.name === product.name);
      if (existingProduct) {
        return prevCart.map((p) =>
          p.name === product.name
            ? { ...p, amount: p.amount + product.amount }
            : p
        );
      } else {
        return [...prevCart, { ...product, amount: product.amount }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
