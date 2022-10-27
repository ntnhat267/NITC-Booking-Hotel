import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isShowMenu : false,
  
}

export const menuSlice = createSlice({
    name:'menu',
    initialState,
    reducers : {
        toggleMenu(state) {
            state.isShowMenu  = !state.isShowMenu 
        },
        //add to cart 
    }
})

export const menuActions =  menuSlice.actions;
export default menuSlice.reducer;