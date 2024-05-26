import { createSlice } from "@reduxjs/toolkit";
const initialState={
    count:0
}

export const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        inc:(state)=>{
            state.count++
        },
        dec:(state)=>{
            state.count--
        },
        reset:(state)=>{
            state.count=0
        }
    }
})
export var {inc,dec,reset}=counterSlice.actions;
// console.log(counterSlice.actions)
// console.log(counterSlice)
export default counterSlice.reducer
// console.log(counterSlice.reducer)
