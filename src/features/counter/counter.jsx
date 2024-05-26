import React from "react";
import {inc,dec,reset} from './counterSlice'
import { useDispatch, useSelector } from "react-redux";
function Counter(){
    var x=useSelector(state=>state.counterReducer)
   var dispatch= useDispatch();
    console.log(x,dispatch)
    return(
        <div>
            <h1>Counter:{x.count}</h1>
            <button onClick={()=>{dispatch(inc())}}>increment</button>
            <button onClick={()=>{dispatch(dec())}}>decrement</button>
            <button onClick={()=>{dispatch(reset())}}>reset</button>
            </div>
    )
}
export default Counter