export default function TodoItem({ id, text, done, onDelete, onToggle }) {
    if (done) {
        return (
            <div className="group flex items-center justify-between bg-surface-container-low/50 p-5 rounded-xl border border-transparent opacity-60">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => onToggle(id)}
                        className="w-6 h-6 rounded-full bg-tertiary flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-90"
                    >
                        <span className="material-symbols-outlined text-[16px] text-white" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                    </button>
                    <div>
                        <h3 className="text-on-surface-variant font-medium text-lg leading-tight line-through decoration-on-surface-variant/40 italic">
                            {text}
                        </h3>
                    </div>
                </div>
                <button
                    onClick={() => onDelete(id)}
                    className="text-error/40 hover:text-error transition-all p-2 rounded-lg hover:bg-error-container/20"
                >
                    <span className="material-symbols-outlined">delete</span>
                </button>
            </div>
        );
    }

    return (
        <div className="group flex items-center justify-between bg-surface-container-lowest p-5 rounded-xl border border-transparent hover:scale-[1.01] hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => onToggle(id)}
                    className="w-6 h-6 rounded-full border-2 border-outline-variant flex items-center justify-center hover:border-primary transition-colors group/check cursor-pointer"
                >
                    <span className="material-symbols-outlined text-[16px] text-primary opacity-0 group-hover/check:opacity-100 transition-opacity">check</span>
                </button>
                <div>
                    <h3 className="text-on-surface font-semibold text-lg leading-tight capitalize">
                        {text}
                    </h3>
                </div>
            </div>
            <button
                onClick={() => onDelete(id)}
                className="opacity-0 group-hover:opacity-100 text-error/60 hover:text-error transition-all p-2 rounded-lg hover:bg-error-container/20"
            >
                <span className="material-symbols-outlined">delete</span>
            </button>
        </div>
    );
}
