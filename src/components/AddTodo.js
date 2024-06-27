import React, { useState } from 'react';
import './AddTodo.css';

function AddTodo({ addTodo }) {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      addTodo(todo);
      setTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new todo"
        className="add-todo-input"
      />
      <button type="submit" className="add-todo-button">Add</button>
    </form>
  );
}

export default AddTodo;
