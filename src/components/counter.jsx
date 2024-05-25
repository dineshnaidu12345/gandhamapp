import React, { useState } from "react";
function Counter(){
    var [c,setC]=useState(0)
    function inc(){
        setC((c)=>{
            return(c+1)
        })
    }
    function dec(){
         setC((c)=>{
            return(c-1)
         })
    }
    return(
    <div>
    <h1>Counter:{c}</h1>
    <button onClick={()=>{inc()}}>Increment Count</button>
    <button onClick={()=>{dec()}}>Decrement Count</button>
    </div>  )
}
export default Counter