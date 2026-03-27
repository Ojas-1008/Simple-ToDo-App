export default function FilterBar({ filter, onFilterChange }) {
    return (
        <div className="filter-bar">
            <button type="button" onClick={() => onFilterChange("all")} className={`filter-btn ${filter === "all" ? "active" : ""}`}>All</button>
            <button type="button" onClick={() => onFilterChange("active")} className={`filter-btn ${filter === "active" ? "active" : ""}`}>Active</button>
            <button type="button" onClick={() => onFilterChange("completed")} className={`filter-btn ${filter === "completed" ? "active" : ""}`}>Completed</button>
        </div>
    );
}