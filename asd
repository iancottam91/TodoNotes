/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, AppRegistry } from 'react';
import Entry from './app/Entry.js'

class AwesomeProject extends Component {

  render() {
    return (
      <Entry/>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
