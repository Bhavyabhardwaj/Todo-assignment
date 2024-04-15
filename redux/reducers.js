import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './actions';

// Load todos from local storage or initialize as an empty array
const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = { id: Date.now(), text: action.payload.text, completed: false };
      const updatedTodos = [...state.todos, newTodo];
      localStorage.setItem('todos', JSON.stringify(updatedTodos)); // Save updated todos to local storage
      return {
        ...state,
        todos: updatedTodos,
      };
    case DELETE_TODO:
      const filteredTodos = state.todos.filter(todo => todo.id !== action.payload.id);
      localStorage.setItem('todos', JSON.stringify(filteredTodos)); 
      return {
        ...state,
        todos: filteredTodos,
      };
    case TOGGLE_TODO:
      const toggledTodos = state.todos.map(todo =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      );
      localStorage.setItem('todos', JSON.stringify(toggledTodos)); 
      return {
        ...state,
        todos: toggledTodos,
      };
    default:
      return state;
  }
};

export default todoReducer;
