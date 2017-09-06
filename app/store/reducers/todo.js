import {
  ADD_TODO,
  REMOVE_TODO,
} from '../actions/todo';
import { uuidv4 } from '../../utils/uuid';

export const defaultState = {
  todoLists: [{
     title: 'Todo 1',
     content: 'job 1',
     todoItems: [
      {
        text: 'Cut the grass',
        completed: false,
      },
      {
        text: 'Clean the shed',
        completed: false,
      },
      {
        text: 'Play golf',
        completed: false,
      },

     ],
     id: '123',
     lastUpdated: new Date(2015, 7, 5),
  },{
    title: 'Todo 2',
    content: 'job 2',
    todoItems: [
     {
       text: 'Play Cricket',
       completed: false,
     }
    ],
    id: '123',
    lastUpdated: new Date(2015, 7, 5),
  }],
};

const todo = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoLists: [
          ...state.todoLists,
          {
            title: action.todoTitle,
            todoItems: action.todoItems,
            id: action.id ? action.id : uuidv4(),
            lastUpdated: new Date(),
          },
        ],
      };

    case REMOVE_TODO: {
      return {
        ...state,
        todoLists: state.todoLists.filter((value, idx) => {
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
