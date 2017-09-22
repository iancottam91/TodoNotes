import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO
} from '../actions/todo';
import { uuidv4 } from '../../utils/uuid';

export const defaultState = {
  todoLists: [],
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
            tag: action.todoTag,
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
      tdl.tag = action.todoTag,

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
