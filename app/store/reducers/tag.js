import {
  ADD_TAG,
} from '../actions/tag';

export const defaultState = ['all'];

const tag = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TAG:
      return [
        ...state,
        action.tagName,
      ];

    default:
      return state;
  }
};

export default tag;
