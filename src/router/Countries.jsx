import React, { useEffect,useState } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
function Countries(){
    var [country,SetCountry]=useState()
    useEffect(()=>{
        axios.get("https://restcountries.com/v3.1/all").then((res)=>{
            SetCountry([...res.data])
            console.log(country)
        })     
        },[])
    return (
        <div className="d-flex ">
             <h1>Countries</h1>
        <div>
            {
               country?.map(a=>{
              return (<li> <Link to={`country/${a.cca3}`}>{a.name.common}</Link></li>)
            }) 
            }
        </div>
        <div>
        <Outlet></Outlet>
        </div>
        </div>
    )
}
export default Countries