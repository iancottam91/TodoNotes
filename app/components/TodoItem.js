import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { navigate } from 'react-navigation';

const TodoItem = ({title, date, editTodo, id, tag}) =>
  <View key={id}>
    <Icon name="view-list" size={20} />
    <Text>{title}</Text>
    <Text>{tag}</Text>
    <Icon name="mode-edit" size={20} onPress={() => {editTodo(id)}}></Icon>
  </View>;

export default TodoItem;