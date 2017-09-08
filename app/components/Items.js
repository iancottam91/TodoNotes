import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  FlatList,
} from 'react-native';
import NoteItem from './NoteItem';
import TodoItem from './TodoItem';

const styles = StyleSheet.create({
  myNotes: {
    flex: 1,
    alignSelf: 'stretch',
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
  }
});

export default class Items extends Component {

  constructor(props){
    super(props);

    this.listTodoNotes = this.listTodoNotes.bind(this);
  }

  listTodoNotes(data) {

    console.log(data.item);
    let rowData = data.item;

    let listItem = null;
    if (rowData.todoItems) {
      listItem = <TodoItem tag={rowData.tag} key={rowData.id} editTodo={this.props.editTodo} title={rowData.title} date={rowData.lastUpdated} id={rowData.id} />
    } else {
      listItem = <NoteItem tag={rowData.tag} key={rowData.id} editNote={this.props.editNote} title={rowData.title} content={rowData.content} date={rowData.lastUpdated} id={rowData.id}/>
    }
    return listItem
  }


  render() {

    const { todoLists, notes, tag } = this.props;
    let items = [...todoLists, ...notes];

    items.sort(function(a,b){
      if(a.lastUpdated > b.lastUpdated){
        return -1;
      } else if(a.lastUpdated < b.lastUpdated){
        return 1;
      }
      return 0;
    })

    const filteredItems = items.filter(function(item){
      console.log(item.tag);
      console.log(tag);
      if(item.tag === tag || tag === 'all' || tag === ''){
        return true;
      }
      return false;
    });


    return (
      <View style={styles.myNotes}>
        <FlatList
          data={filteredItems}
          renderItem={(item) => this.listTodoNotes(item)}
        />
      </View>
    );
  }
}
