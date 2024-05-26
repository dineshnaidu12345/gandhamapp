import products from "./products";
const initialState={
    products:products,
    cart:[]
}
function productsreducer(state=initialState,action){


  if(action.type==="ADDTOCART")
    {
       return {...state,cart:[...state.cart,action.payload]} 
    }
    console.log(action.payload)
  
    return state

}
 
export default productsreducer