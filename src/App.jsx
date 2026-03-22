import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import FilterBar from "./components/FilterBar";

function App() {
  return (
    <div className="app-container">
      <h1>Todo App</h1>
      <TodoInput />
      <FilterBar />
      <TodoList />
      <TodoItem />
    </div>
  );
}

export default App;