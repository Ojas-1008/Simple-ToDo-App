import { useState } from 'react';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import FilterBar from "./components/FilterBar";

function App() {

  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  function addTodo(text) {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      done: false
    };

    setTodos(prevTodos => [...prevTodos, newTodo]);
  }

  function removeTodo(idToRemove) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== idToRemove));
  }

  function toggleTodo(idToToggle) {
    setTodos(prevTodos => prevTodos.map(todo => todo.id === idToToggle ? 
      { ...todo, done: !todo.done }
      : todo
    ));
  }

  return (
    <div className="app-container">
      <h1>Todo App</h1>
      <TodoInput onAdd={addTodo} />
      <FilterBar />
      <TodoList todos={todos} onDelete={removeTodo} onToggle={toggleTodo} />
    </div>
  );
}

export default App;