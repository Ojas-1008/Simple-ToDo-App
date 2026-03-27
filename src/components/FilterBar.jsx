export default function FilterBar({ filter, onFilterChange }) {
    const baseStyle = "px-6 py-2 rounded-full font-label font-medium text-xs uppercase tracking-widest transition-all";

    // This helper makes it easy to handle "Active" vs "Inactive" states
    const getBtnStyle = (btnFilter) =>
        filter === btnFilter
            ? "bg-primary text-on-primary shadow-sm"
            : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest";

    return (
        <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2 custom-scrollbar">
            <button
                type="button"
                onClick={() => onFilterChange("all")}
                className={`${baseStyle} ${getBtnStyle("all")}`}
            >
                All
            </button>
            <button
                type="button"
                onClick={() => onFilterChange("active")}
                className={`${baseStyle} ${getBtnStyle("active")}`}
            >
                Active
            </button>
            <button
                type="button"
                onClick={() => onFilterChange("completed")}
                className={`${baseStyle} ${getBtnStyle("completed")}`}
            >
                Completed
            </button>
        </div>
    );
}
