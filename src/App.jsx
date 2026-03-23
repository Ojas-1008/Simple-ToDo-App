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
  return (
    <div className="app-container">
      <h1>Todo App</h1>
      <TodoInput onAdd={addTodo} />
      <FilterBar />
      <TodoList />
      <TodoItem />
    </div>
  );
}

export default App;