import {
  ADD_NOTE,
  REMOVE_NOTE,
} from '../actions/note';
import { uuidv4 } from '../../utils/uuid';

export const defaultState = {
  notes: [{
    title: 'Note A',
    id: '123',
    lastUpdated: new Date(2016, 2, 8),
  },{
    title: 'Note B',
    id: '142',
    lastUpdated: new Date(2014, 3, 13),
  }],
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
            id: action.id ? action.id : uuidv4(),
            lastUpdated: new Date(),
          },
        ],
      };

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
