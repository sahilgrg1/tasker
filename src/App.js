import React, { useState } from 'react'
import './index.css';
import ToDoList from "./components/ToDoList"
import AddToDo from "./components/AddToDo"



function App() {

  const [todoList, setList] = useState([]);

  const [value, setValue] = useState("");

  const addItem = (data) => {

    if (data !== "") {

      setList((t) => {
        console.log("add")
        return [...t, value]
      }

      )
      setValue("");

    }
    else { console.log("not add") }
  }

  const removeItem = idx => {
    setList((t) => {
      return t.filter((item, id) => {
        return id !== idx;
      })
    });
  }




  return (<>
    <h3>ToDo-List</h3>
    <main>

      <div className="todo-input">

       <AddToDo value={value} setValue={setValue} addItem={addItem}/>

<ToDoList todoList={todoList} removeItem={removeItem}/>
       
      </div>

    </main>
  </>)
}

export default App
