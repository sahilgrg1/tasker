import React from 'react'

function ToDoList({todoList,removeItem}) {
  return (
    <div className="list-items">
          <ul type="none">
            <div className="list">
              {todoList.map((item, index) => {
                return (<>


                  <li><button onClick={() => removeItem(index)}>-</button>{item}</li>

                </>);

              })}
            </div>
          </ul>

        </div>
  )
}

export default ToDoList
