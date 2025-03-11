// import colorReducer from '../colorSlice'
// import { configureStore } from "@reduxjs/toolkit"
// const store = configureStore({
//     reducer :{
//         color : colorReducer
//     }

// })
// export default store



import { configureStore } from '@reduxjs/toolkit'
import colorReducer from '../colorSlice'


const store = configureStore({
reducer :{
    color : colorReducer
}
})

export default store