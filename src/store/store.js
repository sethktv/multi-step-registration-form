import { configureStore } from '@reduxjs/toolkit'
import {reducer} from './root'

export const store = configureStore({
    reducer
})