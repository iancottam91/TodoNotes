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
import { addTodo } from '../store/actions/todo';
import Items from '../components/Items';
import TodoListItem from '../components/TodoListItem';
import ListView from '../todoList/ListView';

class CreateScreen extends Component {

  static navigationOptions = ({navigation}) => ({
    title: 'Create To Do List',
  });

  constructor(props) {
    super(props);
    this.completeChange = this.completeChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onNewItemChange = this.onNewItemChange.bind(this);
    this.onNewItemKeyPress = this.onNewItemKeyPress.bind(this);

    const { todoLists } = props.todo;
    const todoList = todoLists[0];

    this.state = {
      todoTitle: todoList.title,
      todoItems: todoList.todoItems,
      newTodoItem: '',
    }
  }

  addItem(text) {
    let todoItems = [...this.state.todoItems];
      todoItems.push({
        text: this.state.newTodoItem,
        completed: false,
      });

    this.setState({
      todoItems
    });
  }

  removeItem(index) {
    let todoItems = [...this.state.todoItems];
      todoItems.splice(index, 1);

    this.setState({
      todoItems
    });
  }

  completeChange(index) {
    let todoItems = [...this.state.todoItems];
      todoItems[index].completed = !todoItems[index].completed;

    this.setState({
      todoItems
    });
  }

  onNewItemChange(event){
    var title = event.nativeEvent.text;
    this.setState({
      newTodoItem: title
    });
  }

  onNewItemKeyPress(event){
    if (this.state.newTodoItem) {
      this.addItem(this.state.newTodoItem);
      this.setState({
        newTodoItem: ''
      });
    }
  }

  render() {

    const { todoItems } = this.state;
    const completeChange = this.completeChange;
    const removeItem = this.removeItem;

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
          defaultValue={this.state.todoTitle}
          onChangeText={(text) => this.setState({todoTitle: text})}
        />
        {todoItems.map(function(todo, index){
          return <TodoListItem key={index} onPressDelete={ () => removeItem(index)  } data={{completed: todo.completed, title: todo.text}} onCompletedChange={ () => {completeChange(index)} } />;
        })}
        <TextInput style={{height: 36, padding: 4, marginBottom: 0, fontSize: 16, borderWidth: 1, borderColor: '#eee', borderRadius: 8, backgroundColor: '#fff'}}
          placeholder='Add a todo'
          blurOnSubmit={false}
          value={this.state.newTodoItem}
          onSubmitEditing={this.onNewItemKeyPress}
          onChange={this.onNewItemChange}>
        </TextInput>

        {/*<ListView />*/}

      </View>
    );
  }

  componentWillUnmount(){
    this.props.addTodo(this.state.todoTitle, this.state.todoItems)
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
  addTodo: (todoTitle, todoItems) => dispatch => dispatch(addTodo(todoTitle, todoItems)),
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateScreen);
