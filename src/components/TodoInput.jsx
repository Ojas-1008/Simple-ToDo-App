import { useState } from 'react';

export default function TodoInput({ onAdd }) {
    const [text, setText] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (!text.trim()) return;
        onAdd(text.trim());
        setText('');
    }

    return (
        <form onSubmit={handleSubmit} className="mb-8 bg-surface-container-low p-1 rounded-xl">
            <div className="relative flex items-center bg-surface-container-lowest rounded-lg shadow-ambient transition-all focus-within:ring-2 focus-within:ring-primary">
                <input
                    className="w-full bg-transparent border-none focus:ring-0 px-6 py-5 text-on-surface placeholder:text-outline/60 font-body"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Capture a new objective..."
                />
                <button
                    className="mr-3 bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-lg font-headline font-bold text-sm tracking-wide shadow-lg hover:scale-[1.02] active:scale-95 transition-all"
                    type="submit"
                >
                    Add
                </button>
            </div>
        </form>
    );
}
