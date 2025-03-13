import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import React from 'react'

const initialState = {
    task : [],
    loading : false,
    error : null
}

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
    return response.data
})

const taskSlice = createSlice({
    name : 'task',
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(fetchTasks.pending, (state) => {

            state.loading = true,
            state.error = null
        })
        .addCase(fetchTasks.fulfilled, (state,action) => {

            state.loading = false,
            state.task = action.payload
            
        })
        .addCase(fetchTasks.rejected, (state,action) => {

            state.loading = false,
            state.error = state.action.message
            
        })
    }

})



export default taskSlice.reducer