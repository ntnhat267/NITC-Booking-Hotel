import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

const BASE_URL = 'https://62cce93ca080052930b17490.mockapi.io/room'

const initialState = {
    rooms: [],
    status: 'idle',
    error: null
}

export const fetchRooms = createAsyncThunk('room/fetchRooms', async () => {
    const response = await axios.get(BASE_URL);
    return response.data
})


const roomsSlice =  createSlice({
    name: 'rooms',
    initialState,
    reducers: {},
    extraReducers(builer){
        builer
            .addCase(fetchRooms.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchRooms.fulfilled, (state, action) => {
                state.status = 'succeeded'
                
                const loadedRooms = action.payload;
                state.rooms =loadedRooms
            })
            .addCase(fetchRooms.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            
    }
})


export const selectAllRooms = (state) => state.rooms.rooms
export const getRoomsStatus = (state) => state.rooms.status
export const getRoomsError = (state) => state.rooms.error



// export const 

export default roomsSlice.reducer