import ReduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import note from './reducers/note';
import todo from './reducers/todo';
import tag from './reducers/tag';
import { AsyncStorage } from "react-native"
import {persistStore, autoRehydrate} from 'redux-persist'

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
    todo,
    tag,
  }),
  undefined,
  compose(
    applyMiddleware(...middlewares),
    autoRehydrate()
  )
);

persistStore(store, {storage: AsyncStorage});

export default store;
