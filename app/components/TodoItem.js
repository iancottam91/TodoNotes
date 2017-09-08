import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { navigate } from 'react-navigation';

const TodoItem = ({title, date, editTodo, id}) =>
  <View key={id}>
    <Icon name="view-list" size={20} />
    <Text>{title}</Text>
    <Icon name="mode-edit" size={20} onPress={() => {editTodo(id)}}></Icon>
  </View>;

export default TodoItem;