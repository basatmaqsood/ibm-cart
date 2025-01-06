// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addItem(state, action) {
        const existingItem = state.items.find(item => item.id === action.payload.id);
        if (!existingItem) {
          state.items.push({ ...action.payload, quantity: 1 });
          state.totalQuantity++;
          state.totalPrice += action.payload.price;
        }
      },
      increaseItem(state, action) {
        const item = state.items.find(item => item.id === action.payload);
        if (item) {
          item.quantity++;
          state.totalQuantity++;
          state.totalPrice += item.price;
        }
      },
      decreaseItem(state, action) {
        const item = state.items.find(item => item.id === action.payload);
        if (item && item.quantity > 1) {
          item.quantity--;
          state.totalQuantity--;
          state.totalPrice -= item.price;
        }
      },
      removeItem(state, action) {
        const item = state.items.find(item => item.id === action.payload);
        if (item) {
          state.totalQuantity -= item.quantity;
          state.totalPrice -= item.price * item.quantity;
          state.items = state.items.filter(item => item.id !== action.payload);
        }
      },
      clearCart(state) {
        state.items = [];
        state.totalQuantity = 0;
        state.totalPrice = 0;
      }
    },
  });
  
  export const { addItem, increaseItem, decreaseItem, removeItem , clearCart} = cartSlice.actions;
  export default cartSlice.reducer;