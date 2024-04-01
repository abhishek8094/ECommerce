import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart")) ?? { items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = {
        ...action.payload,
        quantity: 0 
      };
      state.items.push(newItem);
    },

    removeFromCart(state, action) {
      const itemId = action.payload.id;
      state.items = state.items.filter((item) => item.id !== itemId);
    },

    deleteFromCart(state, action) {
      const itemId = action.payload.id;
      state.items = state.items.filter((item) => item.id !== itemId);
    },

    incrementQuantity(state, action) {
      const itemId = action.payload.id;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.quantity += 1;
      }
    },

    decrementQuantity(state, action) {
      const itemId = action.payload.id;
      const item = state.items.find((item) => item.id === itemId);
      if (item && item.quantity > 0) { 
        item.quantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
