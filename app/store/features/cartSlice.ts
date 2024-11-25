import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  items: CartProduct[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      const existingProduct = state.items.find(
        (item) => item.name === action.payload.name
      );

      if (existingProduct) {
        existingProduct.amount += action.payload.amount;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.name !== action.payload);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ name: string; amount: number }>
    ) => {
      const item = state.items.find(
        (item) => item.name === action.payload.name
      );
      if (item) {
        item.amount = action.payload.amount;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
