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
  Picker,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { addNote, removeNote } from '../store/actions/note';
import Items from '../components/Items';
import { navigate } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

class HomeScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Ian\'s Notes and Todos',
    headerRight: <Text><Icon name="note-add" size={30} style={{marginLeft: 20,flex:1}} onPress={() => navigation.navigate('EditNote', {action: 'create'})}/>
       <Icon name="playlist-add" size={30} style={{marginLeft: 20, flex:1}} onPress={() => navigation.navigate('EditTodo', {action: 'create'})} /></Text>
  });

  constructor(props){
    super(props);
    this.state = {
      tag: '',
    };
//    this.addItem = this.addItem.bind(this);
  }

  static addItem(type) {
    const { navigate } = this.props.navigation;
    navigate('EditNote', {action: 'create'})
  }

  editNote(id) {
    const { navigate } = this.props.navigation;
    navigate('EditNote', { action: 'edit', id })
  }

  addTodo() {
    const { navigate } = this.props.navigation;
    navigate('EditTodo', {action: 'create'});
  }

  editTodo(id) {
    const { navigate } = this.props.navigation;
    navigate('EditTodo', { action: 'edit', id });
  }

  render() {

    const { tagOptions } = this.props;
    const { tag } = this.state;

    return (
      <View style={styles.container}>
        <Picker
          style={{marginBottom: 0}}
          selectedValue={tag}
          onValueChange={(itemValue, itemIndex) => this.setState({tag: itemValue})}>
          <Picker.Item label='Filter by category...' value='' />
          {tagOptions.map(function(tag, index){
            return <Picker.Item label={tag} value={tag} />;
          })}
        </Picker>
        <Items
          tag={tag}
          editNote={this.editNote.bind(this)}
          editTodo={this.editTodo.bind(this)}
          todoLists={this.props.todo.todoLists}
          notes={this.props.note.notes}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
    paddingTop: 0,
  },
});

const mapStateToProps = state => ({
  todo: state.todo,
  note: state.note,
  tagOptions: state.tag,
});

const mapDispatchToProps = {
  removeNote: id => dispatch => dispatch(removeNote(id)),
  addNote: noteText => dispatch => dispatch(addNote(noteText)),
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
