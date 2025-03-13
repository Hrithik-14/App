// import colorReducer from '../colorSlice'
// import { configureStore } from "@reduxjs/toolkit"
// const store = configureStore({
//     reducer :{
//         color : colorReducer
//     }
// })
// export default store
// import { configureStore } from '@reduxjs/toolkit'
// import colorReducer from '../colorSlice'

import { configureStore } from "@reduxjs/toolkit";

import countReducer from '../countSlice'
// const store = configureStore({
// reducer :{
//     color : colorReducer
// }
// })

// export default store

// const store = configureStore({

//     reducer : {
//         counter : counterReducer
//     }
// })
// export default store
// import { configureStore } from "@reduxjs/toolkit";
// import taskReducer from '../datatSlice'

// const store = configureStore({
//     reducer: {
//         task: taskReducer,
//     },
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware(), 
// });

// export default store;



const store = configureStore({
    reducer : {
        counter : countReducer
    }
    // middleware : (getDefaultMiddleware) => getDefaultMiddleware()
})

export default store