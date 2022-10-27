import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartReducer from '../features/cart/cartSlice';
import themeReducer from '../features/theme/themeSlice'
import menuReducer from '../features/menu/menuSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    theme : themeReducer,
    menu: menuReducer,
  },
});
