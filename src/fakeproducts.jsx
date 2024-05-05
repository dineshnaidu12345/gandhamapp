import React from "react";
import { connect } from "react-redux";

 function Products(props){
    console.log(props)
    return(
    <div className="border border-2 border-warning">
        <h1>products:</h1>
        <h1 className="card m-5 bg-warning-subtle w-25 p-5 text-center" >Cart:{props.cart.length}</h1>
        <ul className="d-flex flex-wrap bg-secondary">
            {
                props.products.map((a) =>{
                    return  <div className="card bg-light w-25 m-5 p-5 d-flex flex-column justify-content-between">
                        <h3 className="text-secondary">{a.title.slice(0,20)}</h3>
                        <img src={a.image} width="100%" alt="" />
                        <h2 className="ms-5 mt-3 text-success"><span className="text-secondary">Price:</span> {a.price} $</h2>
                        <button onClick={()=>{props.dispatch({type:"ADDTOCART",payload:a})}} className="btn btn-warning mt-2">Add TO Cart</button>
                        </div>
                         })}
                         </ul>
                         </div>
                         )}
 export default connect(store=>store)(Products)
