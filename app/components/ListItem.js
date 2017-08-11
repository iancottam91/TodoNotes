import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const ListItem = ({title, date}) =>
  <View>
    <Text>{title}</Text>
    <Text>{date.toString()}</Text>
  </View>;

export default ListItem;