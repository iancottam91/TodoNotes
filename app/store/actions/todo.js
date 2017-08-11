export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = (todoText, id) => ({
  type: ADD_TODO,
  todoText,
  id,
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id
});

