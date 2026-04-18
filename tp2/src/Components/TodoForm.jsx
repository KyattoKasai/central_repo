import React, { useState } from 'react';
import '../Css scripts/TodoForm.css';

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text.trim());
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input">
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Add a new task..."
        required 
      />
      <button type="submit">Add</button>
    </form>
  );
}