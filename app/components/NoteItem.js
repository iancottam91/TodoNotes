import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { navigate } from 'react-navigation';

const ListItem = ({title, content, date, tag, editNote, id}) =>
  <TouchableOpacity key={id} style={styles.noteDetails} onPress={() => {editNote(id)}}>
    <Icon name="description" size={20} />
    <Text style={styles.noteTitleButton}>{title}</Text>
    <Icon name="mode-edit" size={20}  style={styles.noteEditButton}></Icon>
  </TouchableOpacity>;
const styles = StyleSheet.create({
  noteDetails: {
    flex: 1,
    flexDirection: "row",
    marginTop: 5,
    padding: 10,
    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor:"white",
  },
  noteTitleButton: {
    fontSize:20,
  }
});



export default ListItem;