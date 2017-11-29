import { combineReducers } from 'redux';
import todoReducer from './todos.js';
import todoCompleteReducer from './completeTodo.js';
import todoDeleteReducer from './deletedTodo.js';

const todoApp = combineReducers({
  todoReducer,
  todoCompleteReducer,
  todoDeleteReducer

})

export default todoApp
