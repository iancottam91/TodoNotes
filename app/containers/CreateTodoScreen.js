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
  Button,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import { addNote, removeNote } from '../store/actions/note';
import Items from '../components/Items';
import TodoListItem from '../components/TodoListItem';
import ListView from '../todoList/ListView';

class CreateScreen extends Component {

  static navigationOptions = ({navigation}) => ({
    title: 'Create To Do List Connected',
  });

  constructor() {
    super();
    this.state = {
      noteTitle: '',
      noteContent: '',
    }
  }

  render() {

    const { todoLists } = this.props.todo;
    const todoList = todoLists[0];

    return (
      <View style={styles.container}>
        <TextInput
          style={{
            height: 60,
            fontSize: 20,
            padding: 20,
            fontWeight: 'bold',
          }}
          placeholder={'Title'}
          defaultValue={todoList.title}
          onChangeText={(text) => this.setState({noteTitle: text})}
        />
        {todoList.todoItems.map(function(todo){
          return <TodoListItem data={{completed: todo.completed, title: todo.text}} onCompletedChange={ () => {alert('pressed')} } />;
        })}
        {/* onCompletedChange - dispatch action to set todo as checked */}


        {/*<ListView />*/}

      </View>
    );
  }

  componentWillUnmount(){
    this.props.addNote(this.state.noteTitle, this.state.noteContent)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
  },
});

const mapStateToProps = state => ({
  todo: state.todo,
  note: state.note,
});

const mapDispatchToProps = {
  addNote: (noteText, noteContent) => dispatch => dispatch(addNote(noteText, noteContent)),
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateScreen);
