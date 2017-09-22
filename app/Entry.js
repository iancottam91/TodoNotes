/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AsyncStorage, Text } from "react-native"
import App from './App';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist'
import store from './store';

function setup(){
  class Entry extends Component {

    constructor(props) {
      super();

    }

    componentWillMount(){
      persistStore(store, { storage: AsyncStorage }, () => {
        this.setState({ rehydrated: true })
      })
    }

    render() {

      return (
        <Provider store={store}>
          <App />
        </Provider>
      );
    }
  }

  return Entry;
}


export default setup;
