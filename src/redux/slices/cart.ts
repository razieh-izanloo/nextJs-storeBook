import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  title: string;
  price: string;
  srcImg: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalPrice: number;
}

const calculateTotalPrice = (items: CartItem[]): number =>
  items.reduce((total, item) => total + Number(item.price) * item.quantity, 0);

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

if (typeof window !== 'undefined') {
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    try {
      const parsed = JSON.parse(storedCart) as CartItem[];
      initialState.items = parsed;
      initialState.totalPrice = calculateTotalPrice(parsed);
    } catch (e) {
      console.error('Failed to parse cart from localStorage', e);
    }
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const item = action.payload;
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        existing.quantity += item.quantity || 1;
      } else {
        state.items.push({ ...item, quantity: item.quantity || 1 });
      }
      state.totalPrice = calculateTotalPrice(state.items);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter((i) => i.id !== action.payload);
      state.totalPrice = calculateTotalPrice(state.items);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    updateQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
      const { id, quantity } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        item.quantity = quantity;
      }
      state.totalPrice = calculateTotalPrice(state.items);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
      localStorage.removeItem('cart');
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
