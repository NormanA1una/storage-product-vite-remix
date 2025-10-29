import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

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

  // Hydrate cart from localStorage on mount (client-side only)
  useEffect(() => {
    try {
      const savedCart =
        typeof window !== "undefined" && localStorage.getItem("cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (_e) {
      // If localStorage access fails or JSON is invalid, ignore and start fresh
    }
  }, []);

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    try {
      if (typeof window === "undefined") return;
      if (cart.length > 0) {
        localStorage.setItem("cart", JSON.stringify(cart));
      } else {
        localStorage.removeItem("cart");
      }
    } catch (_e) {
      // Ignore storage errors
    }
  }, [cart]);

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
