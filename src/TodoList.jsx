import { useState } from "react"
import {v4 as uuidv4} from 'uuid';

export default function TodoList(){

  let [todos , setTodos] = useState([{task : 'sample Task' , id : uuidv4()}])
  let [newTodo , setNewTodo] = useState("")

  let addNewTask = () => {
    setTodos([...todos ,{task : newTodo , id : uuidv4()}])
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
          todos.map((todo)=>(
            <li key={todo.id} className="todo-item">{todo.task}</li>
          ))
        }
      </ul>
    </div>
  )
}
