/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { connect } from 'react-redux';
import { addNote, removeNote } from './store/actions/note';
import Items from './components/Items';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {createOptsHidden: true};
    this.create = this.create.bind(this);
    this.createOptsStyle = this.createOptsStyle.bind(this);
    this.addItem = this.addItem.bind(this);

    console.log(this.props.test);
  }

  create() {
    this.setState({
      createOptsHidden: !this.state.createOptsHidden
    })
  }

  addItem() {
    console.log('add item');
    this.props.addNote('Some text');
  }

  createOptsStyle() {
    if(this.state.createOptsHidden){
      return {
        display: 'none',
      }
    }
  }

  render() {



    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Ian's Notes and Todos
        </Text>
        <Button
          onPress={this.create}
          title={this.state.createOptsHidden ? 'Create' : 'Collapse'}
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <View style={this.createOptsStyle()}>
            <Button
              title={'Create Note'}
              onPress={this.addItem}
            />
            <Button
              title={'Create To do List'}
              onPress={this.addItem}
            />
        </View>
        <Items todos={this.props.todo.todos} notes={this.props.note.notes} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  myNotes: {
    flex: 1,
    alignSelf: 'stretch',
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
  }
});

const mapStateToProps = state => ({
  todo: state.todo,
  note: state.note,
});

const mapDispatchToProps = {
  removeNote: id => dispatch => dispatch(removeNote(id)),
  addNote: noteText => dispatch => dispatch(addNote(noteText)),
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
