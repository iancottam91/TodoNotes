export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

export const addNote = (noteText, noteContent, id) => ({
  type: ADD_NOTE,
  noteText,
  noteContent,
  id,
});

export const removeNote = id => ({
  type: REMOVE_NOTE,
  id
});

