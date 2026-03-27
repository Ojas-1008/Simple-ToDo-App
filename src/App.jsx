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
    <main className="min-h-screen bg-surface font-body text-on-surface antialiased">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Polished Header */}
        <header className="mb-12 text-center">
          <h1 className="text-primary font-headline font-extrabold tracking-tight text-4xl md:text-5xl mb-3">
            The Curator
          </h1>
          <div className="flex items-center justify-center gap-2 text-on-surface-variant/60 font-label font-medium uppercase tracking-[0.2em] text-[10px]">
            <span className="w-8 h-[1px] bg-outline-variant"></span>
            Task Workspace
            <span className="w-8 h-[1px] bg-outline-variant"></span>
          </div>
        </header>

        {/* Action Area */}
        <TodoInput onAdd={addTodo} />

        {/* Filter Navigation */}
        <FilterBar filter={filter} onFilterChange={(filterUpdate) => setFilter(filterUpdate)} />

        {/* The List Container */}
        <TodoList todos={visibleTodos} onDelete={removeTodo} onToggle={toggleTodo} filter={filter} />
      </div>
    </main>
  );
}

export default App;
