import { useState } from 'react';
import './App.css';

  function App(){
  const [ count, setCount] = useState(0);

  function handleAdd(){
  setCount (count => count + 1) 
  setCount (count => count + 1) 
  setCount (count => count + 1) 
  }

  function handleSub(){
  setCount (count - 1)
  }

  function handleReset(){
    setCount (0)
    }
 
  return (
   <div className="APP">
    <div className="Box">
      <p>{count}</p>
      <button onClick={handleAdd} className='add'>ADD</button>
      <button onClick={handleSub} className='sub'>SUB</button>
      <button onClick={handleReset} className='reset'>RESET</button>
    </div>
   </div>
  )
}
export default App;



import { useState } from 'react';
import './App.css';

  function App(){
  const [ tasks, setTasks] = useState([
    {id: 1, name: "Shailu", completed: true},
    {id: 2, name: "Divya", completed: false},
    {id: 3, name: "Vyshu", completed: false}
  ]);

  
  return (
    <div className="App">
        <h1>Task List</h1>
        <ul>
            {tasks.map((task) => (
              <li>
                <span>{task.id} - {task.name}</span>
                <button>Delete</button>
              </li>
            ))}
        </ul>
    </div>
  )
}
export default App ;

