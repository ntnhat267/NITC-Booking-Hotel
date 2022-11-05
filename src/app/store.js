import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartReducer from '../features/cart/cartSlice';
import themeReducer from '../features/theme/themeSlice'
import menuReducer from '../features/menu/menuSlice'
import roomsReducer from '../features/rooms/roomsSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    theme : themeReducer,
    menu: menuReducer,
    rooms: roomsReducer
  },
});
