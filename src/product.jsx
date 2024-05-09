import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Product(){
  var {cname}=  useParams()
  var[product,setProduct]=useState({})
  console.log(cname)
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products/"+cname).then((res)=>{
        setProduct({...res.data})
        console.log(product)


    })
  },[cname])
    return(
        <div  className="card" style={{padding:"15px",marginLeft:"500px",border:"2px solid grey",width:"500px",backgroundColor:"grey",color:"whitesmoke"}}>
        <h3 style={{padding:"1px",marginLeft:"60px"}}>product:-{product?.id}</h3>
        <h5 style={{padding:"1px",marginLeft:"60px"}}>Name:-{product?.title?.slice(0,20)}</h5>
        <h5 style={{padding:"1px",marginLeft:"60px"}}>Category:-{product?.category}</h5>
        <img style={{marginLeft:"100px"}} src={product?.image}width="200px" alt="" />
        <h4 style={{padding:"1px",marginLeft:"60px"}}>Price:-{product?.price}</h4>
        <h4 style={{padding:"1px",marginLeft:"60px"}}>Rating:-{product?.rating?.rate}</h4>
        <h4 style={{padding:"1px",marginLeft:"60px"}}>Total item sales:-{product?.rating?.count}</h4>
        </div>
    )
}
export default Product