import { createStore } from "redux";
import productsreducer from "./products.reducer";
// import products from "./products";
// console.log(products)
var store =createStore(productsreducer)
export default store