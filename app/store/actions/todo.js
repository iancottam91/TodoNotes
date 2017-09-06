export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = (todoTitle, todoItems, id) => ({
  type: ADD_TODO,
  todoTitle,
  todoItems,
  id,
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id
});

