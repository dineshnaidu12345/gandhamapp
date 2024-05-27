import React from "react";
import { useGetAllcountriesQuery } from "../../services/countriesApi";
function Countries(){
var {isLoading,data}=useGetAllcountriesQuery();
console.log("isloading",isLoading)
console.log("Data",data)
    return(
        <div>
            <h1>Countries</h1>
        </div>
    )
}
export default Countries