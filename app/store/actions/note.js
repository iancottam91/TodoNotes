export const ADD_NOTE = 'ADD_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

export const addNote = (noteText, noteContent, noteTag, id) => ({
  type: ADD_NOTE,
  noteText,
  noteContent,
  noteTag,
  id,
});

export const editNote = (noteText, noteContent, noteTag, id) => ({
  type: EDIT_NOTE,
  noteText,
  noteContent,
  noteTag,
  id,
});

export const removeNote = id => ({
  type: REMOVE_NOTE,
  id
});

