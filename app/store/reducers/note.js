import {
  ADD_NOTE,
  REMOVE_NOTE,
  EDIT_NOTE
} from '../actions/note';
import { uuidv4 } from '../../utils/uuid';

export const defaultState = {
  notes: [],
};

const note = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            title: action.noteText,
            content: action.noteContent,
            id: action.id ? action.id : uuidv4(),
            key: action.id ? action.id : uuidv4(),
            tag: action.noteTag,
            lastUpdated: new Date(),
          },
        ],
      };
    case EDIT_NOTE:
      let newState = Object.assign({}, state);
      let index;
      let notes = newState.notes.filter((note, i) => {
        if (note.id === action.id) {
          index = i;
          return true;
        }
      });

      let note = notes[0];
      note.title = action.noteText;
      note.content = action.noteContent;
      note.lastUpdated = new Date();
      note.tag = action.noteTag;

      newState.notes[index] = note;

      return newState;

    case REMOVE_NOTE: {
      return {
        ...state,
        notes: state.notes.filter((value, idx) => {
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

export default note;
