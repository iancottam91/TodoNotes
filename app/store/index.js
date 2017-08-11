import ReduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import note from './reducers/note';
import todo from './reducers/todo';

// Add redux Logger with default options in development
const middlewares = [ReduxThunk];

//if (process.env.NODE_ENV !== 'production') {
  const { createLogger } = require('redux-logger');
  middlewares.push(createLogger({ collapsed: false }));
//}

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    note,
    todo
  }),
  applyMiddleware(...middlewares)
);

export default store;