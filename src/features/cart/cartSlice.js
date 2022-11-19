import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isShowCart : false,
    totalPrice : 0,
    cartItems : []
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers : {
        //show cart
        toggleCart(state) {
            state.isShowCart = !state.isShowCart
        },
        //add to cart 
        addToCart(state, action) {
            const newItems = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === newItems.id)
            if(!existingItem) {
                state.cartItems.push({
                    name: newItems.name,
                    avatar: newItems.avatar,
                    beds: newItems.beds,
                    roomSize: newItems.roomSize,
                    occupancy:newItems.occupancy,
                    bathroom: newItems.bathroom,
                    price: newItems.price,
                    id: newItems.id,
                    quantity: 1,
                    totalPrice: newItems.price,
                })
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItems.price);
            }


            state.totalPrice = state.cartItems.reduce((total, item) => {
                return total + Number(item.price)*Number(item.quantity)
            },0)
        },
        //remove cart
        removeCart(state,action) {
            const {id} = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id)

            if(existingItem.quantity === 1) {
                state.cartItems =  state.cartItems.filter(item => item.id !== id )
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price)
            }
            state.totalPrice = state.cartItems.reduce((total, item) => {
                return total + Number(item.price)*Number(item.quantity)
            },0)
        },   

        //delete cart
        deleteCart(state, action) {
            const {id} = action.payload;
            state.cartItems =  state.cartItems.filter(item => item.id !== id )

            state.totalPrice = state.cartItems.reduce((total, item) => {
                return total + Number(item.price)*Number(item.quantity)
            },0)
        }
    }
})

export const cartActions =  cartSlice.actions;
export default cartSlice.reducer;