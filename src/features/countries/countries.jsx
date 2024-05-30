import React from "react";
import{ useGetAllCountriesQuery} from '../../services/countriesApi';
function Countries(){
var {isLoading,data}=useGetAllCountriesQuery();
console.log("isloading",isLoading)
console.log("Data",data)
    return(
        <div>
            <h1>Countries</h1>
            {isLoading&&(<h1>loading.....</h1>)} 
            {isLoading===false && (
                data.map(function(country){
                    return(
                        <li>{country.name.common}</li>
                    )
                })
            )}

        </div>
    )
}
export default Countries