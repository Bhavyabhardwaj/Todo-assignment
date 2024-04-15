// TodoItem.js
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/actions";
import "./style/TodoItem.css";
import deleteImage from "../../public/icons8-delete.svg";
import { toggleTodo } from "../../redux/actions"; 

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id)); 
  };

  return (
    <li className={todo.completed ? "completed" : ""}>
      <div className="todo-content">
        <label className="checkbox style-b">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggle}
          />
          <span className="checkbox__body"></span>
          <span className="checkbox__checkmark"></span>
        </label>
        <span className="text">{todo.text}</span>
        <button className="delete-btn" onClick={handleDelete}>
          <img className="image" src={deleteImage} alt="" />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
