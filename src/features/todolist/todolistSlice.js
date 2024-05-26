import { createSlice } from "@reduxjs/toolkit";
const initialState={
    todos:["dinesh","gandham","jagadessh","dsaiRam"]
}
var todoSlice=createSlice({
    name:"todolist",
    initialState,
    reducers:{
        addtodo:(state,action)=>{
            state.todos.push(action.payload)
        }
    }

})
export const {addtodo}=todoSlice.actions;
export default todoSlice.reducer;