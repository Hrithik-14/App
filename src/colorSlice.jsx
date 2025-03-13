// import React from 'react'
// import { createSlice } from '@reduxjs/toolkit'
// const colorSlice = createSlice({
//     name : 'color',
//     initialState: {
//         color :  'red'
//         },
//         reducers : {
//             setColor : (state,action) => {
//                 state.color = action.payload
//             }

//         }

//     }
// )

// export const {setColor} = colorSlice.actions
// export default colorSlice.reducer


import { createSlice } from '@reduxjs/toolkit'


const colorSlice =  createSlice({
    name : 'color',
    initialState : {
        color: 'red'
    },
    reducers : {
        setColor : (state,action) => {
            state.color = action.payload
        }
    }

})

export const { setColor } = colorSlice.actions
export default colorSlice.reducer



