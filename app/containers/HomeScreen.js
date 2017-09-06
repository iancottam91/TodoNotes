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
import { addNote, removeNote } from '../store/actions/note';
import Items from '../components/Items';
import { navigate } from 'react-navigation';

class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Ian\'s Notes and Todos',
  };

  constructor(props){
    super(props);
    this.state = {createOptsHidden: false};
    this.create = this.create.bind(this);
    this.createOptsStyle = this.createOptsStyle.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  create() {
    this.setState({
      createOptsHidden: !this.state.createOptsHidden
    })
  }

  addItem(type) {
    const { navigate } = this.props.navigation;
    navigate('Create', { type })
  }

  addTodo() {
    const { navigate } = this.props.navigation;
    navigate('EditTodo');
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
        <Button
          onPress={this.create}
          title={this.state.createOptsHidden ? 'Create' : 'Collapse'}
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <View style={this.createOptsStyle()}>
            <Button
              title={'Create Note'}
              onPress={() => {this.addItem('note')}}
            />
            <Button
              title={'Create To do List'}
              onPress={() => {this.addTodo()}}
            />
        </View>
        <Items todoLists={this.props.todo.todoLists} notes={this.props.note.notes} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 10,
  },
});

const mapStateToProps = state => ({
  todo: state.todo,
  note: state.note,
});

const mapDispatchToProps = {
  removeNote: id => dispatch => dispatch(removeNote(id)),
  addNote: noteText => dispatch => dispatch(addNote(noteText)),
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
