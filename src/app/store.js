import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import todosReducer from '../features/todolist/todolistSlice'
export const store = configureStore({
    reducer: {counterReducer,todosReducer},
})

 

