import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '../features/cart/cartSlice';
import themeReducer from '../features/theme/themeSlice'
import menuReducer from '../features/menu/menuSlice'
import roomsReducer from '../features/rooms/roomsSlice'
import servicesReducer from '../features/service/servicesSlice'
import blogsReducer from '../features/blogs/blogsSlice'


export const store = configureStore({
  reducer: {

    cart: cartReducer,
    theme : themeReducer,
    menu: menuReducer,
    rooms: roomsReducer,
    services: servicesReducer,
    blogs : blogsReducer,
  },
});
