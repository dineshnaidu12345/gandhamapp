import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import todosReducer from '../features/todolist/todolistSlice'
import { countriesApi } from '../services/countriesApi'
export const store = configureStore({
    reducer: {
        
        counterReducer,
        todosReducer,
        [countriesApi.reducerPath]:countriesApi.reducer
    }, 
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(countriesApi.middleware),

})

 

