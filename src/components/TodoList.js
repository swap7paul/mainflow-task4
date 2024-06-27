import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}

export default TodoList;
