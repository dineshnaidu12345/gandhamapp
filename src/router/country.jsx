import axios from "axios";
import React, { useEffect,useState } from "react";
import { useParams } from "react-router";
function Country(){
    var {cname}=useParams()
    var [country,setCountry]=useState()
    useEffect(()=>{
        axios.get(`https://restcountries.com/v3.1/alpha/${cname}`).then((res)=>{
            setCountry({...res.data[0]})
            console.log(country)
        })
    
    },[cname])
    return(
      <div className="border border-2 m-5 p-5 bg-danger-subtle text-secondary">
      <h1>{console.log(country)}</h1>
      <h1>Name:- {(country?.name.common)}</h1>
      <h3>capital:- {(country?.capital)}</h3>
      <img src={country?.flags.png}/> 
      <br />
      <h5>Population:-{country?.population}</h5>
      </div>
    )
}
export default Country