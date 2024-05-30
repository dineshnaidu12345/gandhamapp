 import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo } from "./todolistSlice";
 function Todolist(){
   var x= useSelector(state=>state.todosReducer)
   var[newtods,setNewtods]=useState('')
   var dispatch=useDispatch()
   console.log(x)
    return(
        <div>
            <h1>Todolist</h1>
            <input type="text" onChange={(e)=>{setNewtods(e.target.value)}}/>
            <button  type="button" class="btn btn-primary" onClick={()=>{dispatch(addtodo(newtods))}}>AddTodos</button>
            {x.todos?.map((k)=>{
                return(
                <li>{k}</li>
                )
            })}
        </div>
    )
 }
 export default Todolist