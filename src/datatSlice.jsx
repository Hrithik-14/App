import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'


const initialState = {
    tasks: [],
    loading: false,
    error: null,
};

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    return response.data
})

const dataSlice = createSlice({
    name : 'tasks',
    initialState,
    reducers : {},
    extraReducers : (builder) =>{
        builder
        .addCase(fetchTasks.pending, (state) => {
            state.loading = true
            // state.task = action.payload
            state.error = null
        })
        .addCase(fetchTasks.fulfilled, (state, action) => {
            state.loading = false
            state.tasks = action.payload
        })
        .addCase(fetchTasks.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})
export default dataSlice.reducer