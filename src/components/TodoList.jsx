import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import './style/TodoList.css'

const TodoList = () => {
  const todos = useSelector(state => state.todos);

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
