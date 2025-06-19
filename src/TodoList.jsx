import { useState } from "react"

export default function TodoList(){

  let [todos , setTodos] = useState(["sample task"])
  let [newTodo , setNewTodo] = useState("")

  let addNewTask = () => {
    setTodos([...todos , newTodo])
  }

  let updateTodoValue = (event)=>{
    setNewTodo(event.target.value);
  }

  return (
    <div className="todo-container">
      <input
        type="text"
        placeholder="Add a task!!"
        value={newTodo}
        onChange={updateTodoValue}
        className="todo-input"
      />
      <br /><br />
      <button onClick={addNewTask} className="add-btn">Add Task</button>
      <hr className="divider" />
      <h4 className="task-heading">Tasks To Do!</h4>
      <ul className="todo-list">
        {
          todos.map((todo, index)=>(
            <li key={index} className="todo-item">{todo}</li>
          ))
        }
      </ul>
    </div>
  )
}
