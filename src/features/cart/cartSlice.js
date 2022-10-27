import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isShowCart : false,
    cartItems : []
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers : {
        toggleCart(state) {
            state.isShowCart = !state.isShowCart
        },
        //add to cart 
    }
})

export const cartActions =  cartSlice.actions;
export default cartSlice.reducer;