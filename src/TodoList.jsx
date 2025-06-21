import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { task: "Sample Task", id: uuidv4(), isDone: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addNewTask = () => {
    setTodos((prev) => [
      ...prev,
      { task: newTodo, id: uuidv4(), isDone: false },
    ]);
    setNewTodo("");
  };

  const updateTodoValue = (event) => setNewTodo(event.target.value);

  const deleteTodo = (id) =>
    setTodos((prev) => prev.filter((todo) => todo.id !== id));

  const markAllDone = () =>
    setTodos((todos) =>
      todos.map((todo) => ({
        ...todo,
        task: todo.task.toUpperCase(),
        isDone: true,
      }))
    );

  const markAsDone = (id) =>
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isDone: true, task: todo.task.toUpperCase() }
          : todo
      )
    );

  return (
    <div className="todo-container">
      <h2 className="main-title">📝 Todo List</h2>
      <div className="input-section">
        <input
          type="text"
          placeholder="What's next?"
          value={newTodo}
          onChange={updateTodoValue}
          className="todo-input"
        />
        <button onClick={addNewTask} className="btn primary">
          ➕ Add
        </button>
        <button onClick={markAllDone} className="btn success">
          ✅ All Done
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span
              className={`task-text ${todo.isDone ? "done" : ""}`}
            >
              {todo.task}
            </span>
            <div className="btn-group">
              <button onClick={() => markAsDone(todo.id)} className="btn warning">
                ✔️ Complete
              </button>
              <button onClick={() => deleteTodo(todo.id)} className="btn danger">
                🗑️ Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
