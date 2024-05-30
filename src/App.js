import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/counter';
import Todolist from './features/todolist/todolist';
import Countries from './features/countries/countries';
import Products from './features/products/products';



function App() {
  return (
    <div className="App" >
      <h1>App</h1>
      <Counter></Counter>
      <Todolist></Todolist>
      <div className='d-flex'>
      <Countries></Countries>
     <div> <Products></Products></div>
     </div>
      
  
    </div>
  );
}

export default App;
