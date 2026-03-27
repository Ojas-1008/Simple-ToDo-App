import TodoItem from './TodoItem';

export default function TodoList({ todos, onDelete, onToggle, filter }) {
    return (
        <div className="bg-surface-container-low rounded-2xl p-6 shadow-ambient">
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                {todos.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
                        <span className="material-symbols-outlined text-4xl text-outline/40 mb-2">task_alt</span>
                        <p className="text-on-surface-variant font-medium">No tasks yet. Add one above.</p>
                    </div>
                ) : (
                    <div className="space-y-4">
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
                    </div>
                )}
            </div>
        </div>
    );
}
