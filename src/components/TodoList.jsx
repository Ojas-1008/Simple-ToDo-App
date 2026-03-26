export default function TodoList({ todos, onDelete, onToggle }) {
    return (
        <div className="todo-list">
            {todos.length === 0 ? (
                <p className="empty-state">No tasks</p>
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