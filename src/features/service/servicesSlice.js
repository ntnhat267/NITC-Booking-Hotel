import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

const BASE_URL = 'https://62cce93ca080052930b17490.mockapi.io/service'

const initialState = {
    services: [],
    status: 'idle',
    error: null
}

export const fetchServices = createAsyncThunk('service/fetchServices', async () => {
    const response = await axios.get(BASE_URL);
    return response.data
})

const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {},
    extraReducers(builer){
        builer
            .addCase(fetchServices.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchServices.fulfilled, (state, action) => {
                state.status = 'succeeded'
                
                const loadedServices = action.payload;
                state.services =loadedServices
            })
            .addCase(fetchServices.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            
    }
})

export const selectAllServices = (state) => state.services.services
export const getServicesStatus = (state) => state.services.status
export const getServicesError = (state) => state.services.error

export const selectServiceById = (state, serviceId) => state.services.services.find(service => service.id === serviceId)

export default servicesSlice.reducer