import React from "react";
import './App.css';

function App() {
  const [query, setQuery] = React.useState("");
  const[todos, setTodos ] = React.useState([]);
    const handlechange = (e)=>{
      const { value } = e.target;
      setQuery(value);
    };
    const handleAdd = ()=>{
      const payload = {
        title: query,
        status: false,
      };
      let newTodos = [...todos, payload];
      setTodos(newTodos);
    };
    console.log(todos);
  return (
    <div className="App">
      <h1>Simple Todo</h1>
        <div>
            <input class="input"
            value={query}
            onChange={handlechange}
            placeholder="Write Something"
            />
            <button onClick={handleAdd}>+</button>
        </div>
        <div>
          {todos.map(item => {
            return <div class="title"> {item.title} 
            <div class="circle"><input type="checkbox"/></div>
            </div>
            
          })}
        </div>
    </div>
  );
}

export default App;
