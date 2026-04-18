import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import '../Css scripts/App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (description) => {
    if (!description.trim()) return;
    
    const newTodo = {
      id: todos.length + 1,
      description: description,
      status: false,
    };
    
    setTodos([...todos, newTodo]);
  };

  const toggleTodoStatus = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, status: !todo.status } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList 
        todos={todos} 
        onToggle={toggleTodoStatus} 
        onDelete={deleteTodo} 
      />
    </div>
  );
}

export default App;