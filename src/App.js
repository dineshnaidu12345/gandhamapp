import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/counter';
import Todolist from './features/todolist/todolist';
import Countries from './features/countries/countries';



function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Counter></Counter>
      <Todolist></Todolist>
      <Countries></Countries>
      
  
    </div>
  );
}

export default App;
