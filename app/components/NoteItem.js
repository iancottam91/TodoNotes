import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const ListItem = ({title, content, date}) =>
  <View>
    <Text>{title}</Text>
    <Text>{content}</Text>
    <Text>{date.toDateString()}</Text>
  </View>;

export default ListItem;