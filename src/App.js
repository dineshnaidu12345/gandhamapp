import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <h1>dinesh</h1>
     <li>
     <Link to="mohan">PRIYANKA NADHI</Link>

     </li>
     <li>
      <Link to="bike">ROYAL ENFIELD</Link>
     </li>
     <li>
      <Link to="countries">COUNTRIES</Link>
     </li>
     <Outlet></Outlet>
    </div>
  );
}

export default App;
