import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL =  'https://62cce93ca080052930b17490.mockapi.io/blogs'

const initialState = {
    blogs: [], 
    status: 'idle',
    error: null,
}

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
    const response = await axios.get(BASE_URL)
    return response.data
})

const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers : {},
    extraReducers(builer) {
        builer
            .addCase(fetchBlogs.pending, (state) => {   
                state.status =  'loading'
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.status = 'succeeded'

                const loadedBlogs =  action.payload;
                state.blogs =  loadedBlogs
            })
            .addCase(fetchBlogs.rejected, (state,action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    }
})

export const selectAllBlogs = (state) => state.blogs.blogs
export const getBlogsStatus =  (state) => state.blogs.status;
export const getBlogsError = (state) => state.blogs.error;

export const selectBlogsById = (state, blogId) => state.blogs.blogs.find(blog => blog.id === blogId)

export default blogsSlice.reducer 