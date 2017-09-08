import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { navigate } from 'react-navigation';

const ListItem = ({title, content, date, tag, editNote, id}) =>
  <View key={id}>
    <Icon name="description" size={20} />
    <Text>{title}</Text>
    <Text>{tag}</Text>
    <Text>{content}</Text>
    <Icon name="mode-edit" size={20} onPress={() => {editNote(id)}} ></Icon>
  </View>;

export default ListItem;