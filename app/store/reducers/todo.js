import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO
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
     key: '123',
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
    id: '456',
    key: '456',
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
            key: action.id ? action.id : uuidv4(),
            lastUpdated: new Date(),
          },
        ],
      };

    case EDIT_TODO:

      let newState = Object.assign({}, state);
      let index;
      let todoList = newState.todoLists.filter((lists, i) => {
        if (lists.id === action.id) {
          index = i;
          return true;
        }
      });

      let tdl = todoList[0];
      tdl.title = action.todoTitle;
      tdl.todoItems = action.todoItems;
      tdl.lastUpdated = new Date();

      newState.todoLists[index] = tdl;

      return newState;

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
