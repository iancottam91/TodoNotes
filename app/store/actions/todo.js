export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = (todoTitle, todoItems, todoTag, id) => ({
  type: ADD_TODO,
  todoTitle,
  todoItems,
  todoTag,
  id,
});

export const editTodo = (todoTitle, todoItems, todoTag, id) => ({
  type: EDIT_TODO,
  todoTitle,
  todoItems,
  todoTag,
  id,
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id
});

