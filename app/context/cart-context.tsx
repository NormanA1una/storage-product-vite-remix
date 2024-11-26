import { createContext, ReactNode, useContext, useState } from "react";

type CartContextType = {
  cart: CartProduct[];
  addToCart: (product: CartProduct) => void;
  removeFromCart: (productName: string) => void;
  updateQuantity: (productName: string, amount: number) => void;
  clearCart: () => void;
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

  const removeFromCart = (productName: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== productName));
  };

  const updateQuantity = (productName: string, amount: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === productName ? { ...item, amount } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        setCart,
      }}
    >
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
