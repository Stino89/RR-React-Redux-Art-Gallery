import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './features/dataSlice'
import { logger } from './features/middleware'

export const store = configureStore({
    reducer: {
        data: dataReducer
    },
    middleware: [logger]
})
//this line of code is importing the configureStore function from the @redux/toolkit package