import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItem(state, action) {
      const product = action.payload;
      const existing = state.items.find(item => item.id === product.id);
      if (existing) existing.quantity += 1;
      else state.items.push({ ...product, quantity: 1 });
    },
    removeItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity(state, action) {
      const { id, change } = action.payload;
      const item = state.items.find(product => product.id === id);
      if (item) {
        item.quantity += change;
        if (item.quantity <= 0) state.items = state.items.filter(product => product.id !== id);
      }
    },
    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find(product => product.id === id);
      if (item && quantity > 0) item.quantity = quantity;
    },
    clearCart(state) { state.items = []; }
  }
});

export const { addItem, removeItem, updateQuantity, setQuantity, clearCart } = cartSlice.actions;
export const selectCartItems = state => state.cart.items;
export const selectCartCount = state => state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
export const selectCartTotal = state => state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
export default cartSlice.reducer;
