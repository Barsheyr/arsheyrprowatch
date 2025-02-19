import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Watch } from "@/models/watch";

interface CartState {
  showCart: boolean;
  cartItems: Watch[];
}

const cartFromLocalStorage =
  typeof localStorage !== "undefined" && localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart")!)
    : [];

const initialState: CartState = {
  showCart: false,
  cartItems: cartFromLocalStorage,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    addItemToCart: (state, action: PayloadAction<Watch>) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item._id === newItem._id
      );

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ _id: string; quantity: number }>
    ) => {
      const { _id, quantity } = action.payload;
      const item = state.cartItems.find((item) => item._id === _id);
      if (item) {
        item.quantity = quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    removeItemFromCart: (state, action: PayloadAction<{ _id: string }>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
  },
});

export const { toggleCart, addItemToCart, updateQuantity, removeItemFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
