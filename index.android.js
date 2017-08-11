/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Entry from './app/Entry';

export default class AwesomeProject extends Component {

  render() {
    return (
      <Entry />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);