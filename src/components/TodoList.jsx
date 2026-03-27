import TodoItem from './TodoItem';

export default function TodoList({ todos, onDelete, onToggle, filter }) {

    const messages = {
        completed: "No completed tasks.",
        active: "Nothing left to do.",
        all: "No tasks."
    };
    const message = messages[filter] || "No tasks.";
    return (
        <div className="todo-list">
            {todos.length === 0 ? (
                <p>{message}</p>
            ) : (
                <ul className="todo-list">
                    {todos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            id={todo.id}
                            text={todo.text}
                            done={todo.done}
                            onDelete={onDelete}
                            onToggle={onToggle}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}