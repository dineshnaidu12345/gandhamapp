import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';


function App() {
  return (
  <div> 
<h1  style={{color:"purple", textAlign:"center",backgroundColor:"grey",padding:"10px"}}>Choose the Product You Want</h1>
<h4 ><li style={{marginLeft:"500px",marginTop:"40px"}}><Link style={{color:"orangered"}} to="gandham">GANDHAM</Link></li></h4>
<h4><li style={{marginLeft:"500px"}}><Link style={{color:"orangered"}} to="car">CAR</Link></li></h4>
<h4><li style={{marginLeft:"500px"}}><Link style={{color:"orangered"}} to="products">PRODUCTS</Link></li></h4>
<div style={{marginTop:"30px"}}>
  <Outlet></Outlet>
</div>
</div> 
 

  );
  
}

export default App;
