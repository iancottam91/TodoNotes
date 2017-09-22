import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { navigate } from 'react-navigation';

const TodoItem = ({title, date, editTodo, id, tag}) =>
  <TouchableOpacity key={id} style={styles.todoDetails} onPress={() => {editTodo(id)}}>
    <Icon name="view-list" size={20} />
    <Text style={styles.todoTitleButton}>{title}</Text>
    <Icon name="mode-edit" size={20} ></Icon>
  </TouchableOpacity>;
const styles = StyleSheet.create({
  todoDetails: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    padding: 10,
    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor:"white",
  },
  todoTitleButton: {
    fontSize:20,
  }
});


export default TodoItem;