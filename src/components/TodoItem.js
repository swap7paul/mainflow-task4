import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, index, toggleTodo, deleteTodo }) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(index)}
        className="todo-checkbox"
      />
      <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>{todo.text}</span>
      <button onClick={() => deleteTodo(index)} className="delete-button">Delete</button>
    </li>
  );
}

export default TodoItem;
