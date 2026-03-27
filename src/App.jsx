import { useState } from 'react';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterBar from "./components/FilterBar";

function App() {

  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const filters = {
    all: (todos) => todos,
    completed: (todos) => todos.filter((todo) => todo.done === true),
    active: (todos) => todos.filter((todo) => todo.done === false)
  };
  const visibleTodos = filters[filter](todos);
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
      <TodoList todos={visibleTodos} onDelete={removeTodo} onToggle={toggleTodo} filter={filter} />
      <FilterBar filter={filter} onFilterChange={(filterUpdate) => setFilter(filterUpdate)} />
    </div>
  );
}

export default App;