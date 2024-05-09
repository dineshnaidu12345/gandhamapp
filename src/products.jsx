import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
function Products(){
    var[product,setProduct]=useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then(res=>{setProduct([...res.data])})
        console.log('this is product',product)
    },[])
    return(
        <div>
            <h1  style={{color:"red",marginLeft:"50px"}}>Products</h1>
            <div>
                {
                    product?.map((a) =>{
                        return(
                          <h4  style={{marginLeft:"50px",marginTop:"15px"}}><li><Link  style={{color:"blue"}} to={"/product/"+a.id}>{a.id}.{a.title.slice(0,25)}</Link></li></h4>
                        )
                    })
                }
            </div>
            <div>
            </div>
        </div>
    )

}
export default Products