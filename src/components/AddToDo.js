import React from 'react'

function AddTodo({value,setValue,addItem}) {
  return (
    <div className="add-item">
    <input type="text" placeholder="add a task..." value={value} onChange={(e) => setValue(e.target.value)}></input>
    <button onClick={() => addItem(value)}>+</button><br></br>
  </div>
  )
}

export default AddTodo;
