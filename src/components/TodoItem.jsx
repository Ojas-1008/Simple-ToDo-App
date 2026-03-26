export default function TodoItem({ id, text, done, onDelete, onToggle }) {
    return (
        <li className={`todo-item ${done ? 'done' : ''}`}>
            <input
                type="checkbox"
                checked={done}
                onChange={() => onToggle(id)}
            />
            <span className={done ? 'text-done' : ''}>{text}</span>
            <button type="button" className="delete-btn" onClick={() => onDelete(id)}>Delete</button>
        </li>
    );
}