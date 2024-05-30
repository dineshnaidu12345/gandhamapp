import React, { useState } from "react";
import { useGetAllProductsQuery, useLazyGetAllProductsQuery } from "../../services/productsApi";


function Products(){
    // var{isLoading,data}=useGetAllProductsQuery()
    // console.log("isloading",isLoading)
    // console.log("data",data)
    var[isLoading,setIsLoading]=useState(true);
    var[data,setData]=useState({})
    var[getAllpr]= useLazyGetAllProductsQuery();
    function getProducts(){
        getAllpr().then((res)=>{
            setIsLoading(false)
            setData( res.data)
        })

    }
    return(
    <div>
        <h1>products</h1>
        <button  type="button" class="btn btn-info" onClick={()=>{getProducts()}}>show the products</button>
        
        {isLoading&&<h1>....Loading</h1>}
        {isLoading===false &&
        data.map(function(product){
            return <li>{product.title}</li>
        })
        }
    </div>
    )
}
export default Products