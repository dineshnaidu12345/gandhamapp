import React from "react";
import { useSelector } from "react-redux";
function Counter(){
    var x=useSelector(state=>state.counterReducer)
    console.log(x)
    return(
        <div>Counter</div>
    )
}
export default Counter