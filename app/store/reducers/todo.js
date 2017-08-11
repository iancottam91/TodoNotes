import {
  ADD_TODO,
  REMOVE_TODO,
} from '../actions/todo';
import { uuidv4 } from '../../utils/uuid';

export const defaultState = {
  todos: [{
     title: 'Todo 1',
     id: '123',
     lastUpdated: new Date(2015, 7, 5),
   },{
     title: 'Todo 2',
     id: '142',
     lastUpdated: new Date(2017, 1, 1),
   }],
};

const todo = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.todoText,
            id: action.id ? action.id : uuidv4(),
            lastUpdated: new Date(),
          },
        ],
      };

    case REMOVE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((value, idx) => {
          return Array.isArray(action.index)
            ? action.index.indexOf(idx) === -1
            : action.index !== idx;
        }),
      };
    }

    default:
      return state;
  }
};

export default todo;
