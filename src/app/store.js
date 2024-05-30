import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import todosReducer from '../features/todolist/todolistSlice'
import { countriesApi } from '../services/countriesApi'
import { productsApi } from '../services/productsApi'
export const store = configureStore({
    reducer: {
        
        counterReducer,
        todosReducer,
        [countriesApi.reducerPath]:countriesApi.reducer,
        [productsApi.reducerPath]:productsApi.reducer
    }, 
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(countriesApi.middleware,productsApi.middleware),

})

 

