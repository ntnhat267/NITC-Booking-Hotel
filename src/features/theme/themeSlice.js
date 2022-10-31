import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isDarkMode : false,

}

export const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers : {
        toggleTheme(state) {
            state.isDarkMode = !state.isDarkMode
        },
        //add to cart 
    }
})

export const themeActions =  themeSlice.actions;
export default themeSlice.reducer;