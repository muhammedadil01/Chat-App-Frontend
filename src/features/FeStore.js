import { configureStore } from '@reduxjs/toolkit'
import  themeSliceReducers  from './SliceTheme'

export const store = configureStore({
    reducer: {
       themeKey : themeSliceReducers ,
    },
});