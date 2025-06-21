import { useState } from "react"
import {v4 as uuidv4} from 'uuid';

export default function TodoList(){

  let [todos , setTodos] = useState([{task : 'sample Task' , id : uuidv4() , isDone : false}])
  let [newTodo , setNewTodo] = useState("")

  let addNewTask = () => {
    setTodos((prvTodo)=>{
      return [...prvTodo , {
        task : newTodo ,
        id : uuidv4(),
        isDone : false
      }]
    })
  }

  let updateTodoValue = (event)=>{
    setNewTodo(event.target.value);
  }


  let deleteTodo = (id)=>{
    setTodos((prvTodo)=>todos.filter((prvTodo)=>prvTodo.id!=id))
  } 


  let markAllDone = ()=>{
     setTodos((todos) => todos.map((todo)=>{
      return {
        ...todo,
        task : todo.task.toUpperCase(),
        isDone : true
      }
     })
    );
  };

  let markAsDone = (id)=> {
    setTodos((todos) => todos.map((todo)=>{

      console.log(todo.isDone)
      if(todo.id === id){
        return {
          ...todo,
          isDone : todo.isDone = true,
          task : todo.task.toUpperCase()
          
        }
      } else {
        return todo;
      }
     })
    );
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
            <li key={todo.id} className="todo-item">
              <span>

                <p style={todo.isDone ? {textDecorationLine : "line-through"} : {}}>
                  {todo.task}&nbsp;
                </p>
                
                <button onClick={() =>markAsDone(todo.id)}>complete</button>
                <button onClick={()=> deleteTodo(todo.id)}>Delete</button>
              </span>
            </li>
          ))
        }
      </ul>

      <button onClick={markAllDone}>All done</button>
    </div>

    
  )
}
